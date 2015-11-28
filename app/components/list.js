var React = require("react");
var ReactRouter = require("react-router");

var ListHeader = require("./listheader.js");
var ListEntry = require("./listentry.js");
var ListItems = require("./listitems.js");

var api = require("./api.js");
var auth = require("./auth.js");

// List page, shows the todo list of items
var List = React.createClass({
  // context so the component can access the router
  contextTypes: {
    location: React.PropTypes.object
  },

  // initial state
  getInitialState: function() {
    return {
      // list of items in the todo list
      items: [],
    };
  },

  // when the component loads, get the list items
  componentDidMount: function() {
    api.getItems(this.listSet);
  },

  // reload the list of items
  reload: function() {
    api.getItems(this.listSet);
  },

  // callback for getting the list of items, sets the list state
  listSet: function(status, data) {
    if (status) {
      // set the state for the list of items
      this.setState({
        items: data.items
      });
    } else {
      // if the API call fails, redirect to the login page
      this.context.router.transitionTo('/login');
    }
  },

  // Show the list of items. This component has the following children: ListHeader, ListEntry and ListItems
  render: function() {
    var name = auth.getName();
    return (
      <section id="todoapp">
	<ListHeader name={name} items={this.state.items} reload={this.reload} />
	<section id="main">
	  <ListEntry reload={this.reload}/>
	  <ListItems items={this.state.items} reload={this.reload}/>
	</section>
      </section>
    );
  }
});

module.exports = List;

