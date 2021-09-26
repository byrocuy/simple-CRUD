var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var kecSchema = new Schema(
    {
        nama: {type: String, require: true}
    }
);

module.exports = mongoose.model('kecamatan', kecSchema);