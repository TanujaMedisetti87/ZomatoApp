const React = require('react');
const ReactDOM = require('react-dom');
const {browserHistory,hashHistory, Route, Router} = require('react-router');
const NavBar = require('./components/js/NavBar');
const Home = require('./clientapp1.jsx');
const login = require('./components/sample/login.jsx');
const MainComp = React.createClass({
    render: function() {
        return (
            <div>
                <NavBar/>
                <br/><br/><br/><br/> {this.props.children}
            </div>
        );
    }
});
ReactDOM.render(
    <Router history={hashHistory}>
    <Route path="/" component={login}/>
    <Route component={MainComp}>
      <Route path="/home" component={Home}/>
    </Route>
</Router>, document.getElementById('app'));
