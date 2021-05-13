var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var labelSchema = new Schema({
    label: String,
    fullLabel: String,
    child:Array
});

module.exports = mongoose.model('ENTRYLABEL', labelSchema, 'ENTRYLABEL');;
