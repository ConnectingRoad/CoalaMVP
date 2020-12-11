const mongoose = require('mongoose');

const mbtiSchema = mongoose.Schema({
    type: String,
    name: String,
    description: String,
    classes: [{
        index:Number,
        tag: String,
        answer: Number,
        url: String
    }]
}, { collection : 'mbti' });

const MBTI = mongoose.model('MBTI', mbtiSchema);

module.exports = { MBTI };