let mongoose        = require('mongoose');
let EntryLabel = require('./ENTRYLABEL.model');
let activities = require('./seedEntryActivities.json').activities;
const log    = require('../../utils/winston');


exports.seed = function() {


  EntryLabel.find({}).exec()
    .then(function(result) {
    if(result.length === 0){
      log.debug('seeding labels');
      activities.map(function(activity){
        let newActivity = new EntryLabel(activity);
        newActivity.save()
        .then(savedResult => {
        })
        .catch(function(error) {
          log.error('ERROR in EntryLabel save: '+error);
          reject(error);
        });
      });
    }
  })
  .catch(function(error) {
      log.error('ERROR in EntryLabel Seeder: '+error);
  });
};

