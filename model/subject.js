let mongoose = require('mongoose');

let Schema = mongoose.Schema;

let SubjectSchema = Schema({
    id : Number,
    nom : String,
    image_matiere : String,
    image_prof : String
});

module.exports = mongoose.model('Subject', SubjectSchema);