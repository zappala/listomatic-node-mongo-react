var React = require("react");

var api = require("./api.js");

// List entry component, handles adding new items to the list
var ListEntry = React.createClass({
  // handles submit event for adding a new item
  addItem: function(event) {
    // prevent default browser submit
    event.preventDefault();
    // get data from form
    var title = this.refs.title.value;
    if (!title) {
      return;
    }
    // call API to add item, and reload once added
    api.addItem(title, this.props.reload);
    this.refs.title.value = '';
  },

  // render the item entry area
  render: function() {
    return (
      <header id="input">
        <form id="item-form" name="itemForm" onSubmit={this.addItem}>
          <input type="text" id="new-item" ref="title" placeholder="Enter a new item" autoFocus={true} />
        </form>
      </header>
    );

  }
});

module.exports = ListEntry;
