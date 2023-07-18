const { Schema, default: mongoose } = require("mongoose");
// const { type } = require("os");

const skillsSchema = new Schema({

    title: String,
    description: String,
    categorySkill: String,
    rutaImg: String,
    active: {
        type: Boolean, 
        default: true
    },
    date: {
        type: Date,
        default: Date.now
    }

});

module.exports = mongoose.model('skills', skillsSchema);