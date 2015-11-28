var React = require("react");
var ReactRouter = require("react-router");
var History = ReactRouter.History;

var auth = require("./auth.js");

// Login page, shows the login form and redirects to the list if login is successful
var Login = React.createClass({
  // mixin for navigation
  mixins: [ History ],

  // initial state
  getInitialState: function() {
    return {
      // there was an error on logging in
      error: false
    };

  },

  // handle login button submit
  login: function(event) {
    // prevent default browser submit
    event.preventDefault();
    // get data from form
    var username = this.refs.username.value;
    var password = this.refs.password.value;
    if (!username || !password) {
      return;
    }
    // login via API
    auth.login(username, password, function(loggedIn) {
      // login callback
      if (!loggedIn)
        return this.setState({
          error: true
        });
      this.history.pushState(null, '/list');
    }.bind(this));
  },

  // show the login form
  render: function() {
    return (
      <div>
        <h2>Login</h2>
        <form className="form-vertical" onSubmit={this.login}>
          <input type="text" placeholder="Username" ref="username" autoFocus={true} />
          <input type="password" placeholder="Password" ref="password"/>
          <input className="btn btn-warning" type="submit" value="Login" />
          {this.state.error ? (
             <div className="alert">Invalid username or password.</div>
           ) : null}
        </form>
      </div>
    );
  }
});

module.exports = Login;
