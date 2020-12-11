const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    name: {
        type: String,
        maxlength: 10
    },
    sex: String,
    answers: [String],
    mbti: String,
    classes:[{
        title: String,
        like: Boolean
    }],
    feedback: {
        score: Number,
        text: String
    }
});

const User = mongoose.model('User', userSchema);

module.exports = { User };