
  let axios    = require('axios');
  let User     = require('./USER.model');
  let jwt      = require('jsonwebtoken');

  const HOSTNAME        = process.env.RED_BASEPATH;
  const PAGINATION      = 100;
  const {google}        = require('googleapis');
  const OAuth2Client    = google.auth.OAuth2;
  const client_id       = process.env.WEB_CLIENT_ID;
  const client_secret   = process.env.CLIENT_SECRET;

 const redirect_uri    = process.env.REDIRECT_URI;


  const log    = require('../../utils/winston');



  function UserHelper() {

    let uh = this;

    uh.mongoGetByEmail      = mongoGetByEmail;
    uh.mongoGetByMongoId    = mongoGetByMongoId;
    uh.update               = update;
    uh.getToken             = getToken;
    uh.getUserByToken       = getUserByToken;
    uh.findByEmail          = findByEmail;
    uh.getAllUsers          = getAllUsers;


    return uh;

  

    function update(mongoUser){

      let promise = new Promise(function(resolve, reject) {

        User.findOneAndUpdate({_id: mongoUser._id}, mongoUser, {new: true} )
          .then(result => {
            log.debug('result in update: ' + result);
            resolve(result);
          })
          .catch(function(error) {
            log.error('ERROR in UserHelper update: ' + error);
            reject(error);
        });
      });

      return promise;
    }


    function mongoGetByEmail(email) {
      let promise = new Promise(function(resolve, reject) {
        User.findOne({email : email}).select("-redmineKey").exec()
        .then(function(user) {

          resolve(user);
        })
        .catch(function(error) {
          log.error('ERROR in UserHelper sync: ' + error);
          reject(error);
        });
      });

      return promise;
    }


    function mongoGetByMongoId (mongoUserId) {
      log.debug('mongoGetByMongoId!!: ' + mongoUserId);
      let promise = new Promise(function(resolve, reject) {
        User.findOne({_id : mongoUserId}).lean().exec()
        .then(function(user) {
        //  log.debug('user: ' + JSON.stringify(user));
          resolve(user);
        })
        .catch(function(error) {
          log.error('ERROR in UserHelper sync: ' + error);
          reject(error);
        });
      });

      return promise;
    }


    function getToken (code){
      let promise = new Promise(function(resolve, reject) {
        const oAuth2Client = new OAuth2Client(client_id, client_secret, redirect_uri);
        oAuth2Client.getToken(code).then(tokens =>{
          log.debug('tokens: ' + JSON.stringify(tokens));
          log.debug('REDIRECT_URI: ' + redirect_uri);
          resolve(tokens.tokens);
        })
        .catch(error =>{
          log.error('ERROR in UserHelper getToken: ' + error);
          log.error('REDIRECT_URI: ' + redirect_uri);
          reject(error);
        })
      });
      return promise;
    }

    function getAllUsers() {
      let promise = new Promise(function(resolve, reject) {
        User.find().populate().exec().then(result => {
          resolve(result);
        })
      })
      return promise
    }

    function getUserByToken(id_token) {
      let promise = new Promise(function(resolve, reject) {
        let payload = jwt.decode(id_token, {complete: true}).payload;
        User.findOne({googleId : payload.sub}).exec()
        .then(function(mongoUser) {
          if(!mongoUser) {
            uh.findByEmail(payload.email)
            .then(mongoUser => {
                mongoUser.googleId = payload.sub;
                uh.update(mongoUser)
                .then(userUpdated => {
                  resolve(userUpdated);
                })
                .catch(function(error) {
                  log.error('ERROR in UserHelper getUserByToken userUpdate: ' + error);
                  reject(error);
              });
            })
            .catch(function(error) {
              log.error('ERROR in UserHelper getUserByToken: ' + error);
              reject(error);
            });
          } else {
            resolve(mongoUser);
          }
        })
        .catch(function(error) {
          log.error('ERROR in UserHelper sync: ' + error);
          reject(error);
        });
      });
      return promise;
    }

    function findByEmail (email) {
      let promise = new Promise(function(resolve, reject) {
        User.findOne({email : email}).exec()
        .then(function(mongoUser) {
          resolve(mongoUser);
        })
        .catch(function(error) {
          log.error('ERROR in UserHelper findByEmail: ' + error);
          reject(error);
        });
      });
      return promise;
    }


  }

  module.exports = new UserHelper();
