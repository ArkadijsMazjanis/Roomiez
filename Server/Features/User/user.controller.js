const async    = require('async');
  let UserHelper = require('./user.helper');
  const log    = require('../../utils/winston');




  function UserController() {

      let uc = this;

      uc.mongoGetByEmail     = mongoGetByEmail;
      uc.getUserByToken      = getUserByToken;
      uc.getAllUsers         = getAllUsers;


      return uc;


    function mongoGetByEmail(req, res) {
      var email = req.params.email;

      UserHelper.mongoGetByEmail(email)
      .then(function(result) {
          res.send(result);
      })
      .catch(function(error) {
          res.status(404).send(error);
      });
    }

    function getUserByToken(req, res) {
      log.debug('in getUserByToken');
      var id_token = req.query.id_token;
      log.debug('id_token: ' + id_token);
      UserHelper.getUserByToken(id_token)
        .then(function(result) {
            res.send(result);
        })
        .catch(function(error) {
            res.status(500).send(error);
        });
    }

    function getAllUsers(req, res) {
      UserHelper.getAllUsers().then(function(result) {
        res.send(result);
    })
    .catch(function(error) {
        res.status(500).send(error);
    });


    }

  }

  module.exports = new UserController();
