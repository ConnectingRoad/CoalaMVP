const express = require('express');
const app = express();
const bodyParser = require('body-parser');
  
const config = require('./config/key');

const { MBTI } = require('./models/MBTI');
const { User } = require("./models/User");

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

const mongoose = require('mongoose');

mongoose.connect(config.mongoURI, {
    useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true, useFindAndModify: false
}).then(() => console.log('MongoDB connect'))
.catch(err => console.log(err));

app.post('/api/mbti/register', (req, res) => {
    const userData = req.body;
    const user = new User(userData);

    user.save(function(err, result){
        const answer = userData.answers[0] + userData.answers[3] + userData.answers[7];
        
        MBTI.findOne({ answer: answer }, (err, mbti) => res.status(200)
            .json({
                success: true,
                mbti: mbti,
                userId: result._id
            })
        )
    })
})

app.post('/api/users/like', (req, res) => {
    User.findOneAndUpdate({ _id: req.body.userId },
        { classes: req.body.classes },
        (err, user) => {
            if (err) return res.json({ success: false, err });
            return res.status(200).send({
                success: true
        })
    })
})

app.post('/api/users/feedback', (req, res) => {
    User.findOneAndUpdate({ _id: req.body.userId },
        { feedback: req.body.feedback },
        (err, user) => {
            if (err) return res.json({ success: false, err });
            return res.status(200).send({
                success: true
        })
    })
})

app.get('/api/mbti/:answers', (req, res) => {
    const answer = req.params.answers[0] + req.params.answers[3] + req.params.answers[7];

    MBTI.findOne({ answer: answer }, (err, mbti) => res.status(200)
        .json({
            success: true,
            mbti: mbti
        })
    )
})

app.get('/api/users/:id', (req, res) => {
    User.findOne({_id: req.params.id}, (err, user) => res.status(200)
    .json({
        success: true,
        user: user
    }))
})

const port = process.env.PORT || 5000;

app.listen(port, function () {
    console.log(`Coonnected${port}`)
});