// requiring the needed packages
const React = require('react');
const ReactDOM = require('react-dom');
const {browserHistory,hashHistory, Route, Router} = require('react-router');
const login = require('./components/sample/login.jsx');
ReactDOM.render(
    <Router history={hashHistory}>
    <Route path="/" component={login}/>
</Router>, document.getElementById('app'));
