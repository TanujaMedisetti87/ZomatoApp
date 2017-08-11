'use strict';
const logger = require('./../../applogger');
const {user} = require('./userEntity');

let addUser = (req, res) => {
  let newUser = new user({username: req.body.username, password: req.body.password});
  newUser.save().then((docs) => {
    logger.debug(docs);
    res.send(docs);
  }, (err) => {
    res.status(400).send(err);
    logger.debug('error occurred while adding');
  });
};

var login = (req, res) => {
    logger.debug('login data' + JSON.stringify(req.body));
    let username = req.body.username;
    let password = req.body.password;
    user.find({username:username},function(err,docs)
    {
      if(docs[0].password == password) {
        res.send('success');
      }
      else{
        res.send('failed');
      }
    });
};

module.exports = {
  addUser,
  login
};
