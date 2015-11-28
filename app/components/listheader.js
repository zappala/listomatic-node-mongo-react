var React = require("react");

var api = require("./api.js");

// List header, which shows who the list is for, the number of items in the list, and a button to clear completed items
var ListHeader = React.createClass({
  // handle the clear completed button submit    
  clearCompleted: function (event) {
    // loop through the items, and delete any that are complete
    this.props.items.forEach(function(item) {
      if (item.completed) {
        api.deleteItem(item, null);
      }
    });
    // XXX race condition because the API call to delete is async
    // reload the list
    this.props.reload();
  },

  // render the list header
  render: function() {
    // true if there are any completed items
    var completed = this.props.items.filter(function(item) {
      return item.completed;
    });
    return (
      <header id="header">
        <div className="row">
          <div className="col-md-6">
            <p><i>Lovingly created for {this.props.name}</i></p>
            <p>
              <span id="list-count" className="label label-default">
		<strong>{this.props.items.length}</strong> item(s)
              </span>
            </p>
            <p><i>Double-click to edit an item</i></p>
          </div>
          {completed.length > 0 ? (
             <div className="col-md-6 right">
               <button className="btn btn-warning btn-md" id="clear-completed" onClick={this.clearCompleted}>Clear completed ({completed.length})

               </button>
             </div>
           ) : null }
        </div>
      </header>
    );
  }
});

module.exports = ListHeader;
