var React = require("react");

var api = require("./api.js");

// Item shown in the todo list
var Item = React.createClass({
  // initial state
  getInitialState: function () {
    return {
      // editing this item
      editing: false,
      // text saved before editing started
      editText: this.props.item.title
    };
  },
  // set the focus and selection range when this item is updated
  componentDidUpdate: function (prevProps, prevState) {
    if (!prevState.editing && this.state.editing) {
      var node = this.refs.editField.getDOMNode();
      node.focus();
      node.setSelectionRange(0, node.value.length);
    }
  },
  // when the item is completed, toggle its state and update it
  toggleCompleted: function() {
    this.props.item.completed = !this.props.item.completed;
    api.updateItem(this.props.item, this.props.reload);
  },
  // called when the delete button is clicked for this item
  deleteItem: function() {
    api.deleteItem(this.props.item, this.props.reload);
  },
  // called when the item is double-clicked
  editItem: function() {
    this.setState({editing: true, editText: this.props.item.title});
  },
  // called when the item is changed
  changeItem: function (event) {
    this.setState({editText: event.target.value});
  },
  // called when the enter key is entered after the item is edited
  saveItem: function(event) {
    if (!this.state.editing) {
      return;
    }
    var val = this.state.editText.trim();
    if (val) {
      this.setState({editing: false, editText: val});
      this.props.item.title = this.state.editText;
      // save the item
      api.updateItem(this.props.item, this.props.reload);
    } else {
      // delete the item if there is no text left any more
      api.deleteItem(this.props.item,this.props.reload);
    }
  },
  // called when a key is pressed
  handleKeyDown: function (event) {
    var ESCAPE_KEY = 27;
    var ENTER_KEY = 13;
    // if the ESC key is pressed, then cancel editing
    // if the ENTER key is pressed, then save edited text
    if (event.which === ESCAPE_KEY) {
      this.setState({editing: false, editText: this.props.item.title});
    } else if (event.which === ENTER_KEY) {
      this.saveItem(event);
    }
  },
  // render the Item
  render: function() {
    // construct a list of classes for the item CSS
    var classes = "";
    if (this.props.item.completed) {
      classes += 'completed';
    }
    if (this.state.editing) {
      classes += ' editing';
    }
    return (
      <li className={classes}>
        <div className="view">
          <input id={this.props.item.id} className="toggle" type="checkbox" onChange={this.toggleCompleted.bind(this,this.props.item)} checked={this.props.item.completed} />
          <label className="check" htmlFor={this.props.item.id}/>
          <label onDoubleClick={this.editItem}>{this.props.item.title}</label>
          <button className="destroy" onClick={this.deleteItem}></button>
        </div>
        <input ref="editField" className="edit" onKeyDown={this.handleKeyDown} onChange={this.changeItem} onSubmit={this.saveItem} onBlur={this.saveItem} value={this.state.editText} />
      </li>
    );
  }
});

module.exports = Item;
