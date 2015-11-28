var React = require("react");
var ReactRouter = require("react-router");

var Item = require("./item.js");

// List items component, shows the list of items
var ListItems = React.createClass({
  // context so the component can access the router
  contextTypes: {
    location: React.PropTypes.object
  },
  // render the list of items
  render: function() {
    // get list of items to show, using the path to the current page
    var shown = this.props.items.filter(function(item) {
      switch (this.context.location.pathname) {
        case '/list/active':
          return !item.completed;
        case '/list/completed':
          return item.completed;
        default:
          return true;
      }
    }, this);

    // using the list of items, generate an Item element for each one
    var list = shown.map(function(item) {
      return (
        <Item key={item.id} item={item} reload={this.props.reload}/>
      );
    }.bind(this));

    // render the list
    return (
      <ul id="todo-list">
	{list}
      </ul>
    );
  }
});

module.exports = ListItems;
