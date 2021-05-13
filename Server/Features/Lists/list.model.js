var mongoose        = require('mongoose');
var Schema          = mongoose.Schema;

var activitySchema = new Schema({
    profile    : Object,
    what  : Object,
    how: Object,
});

module.exports = activitySchema;
