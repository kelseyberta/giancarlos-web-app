const mongoose = require('mongoose')

mongoose
    .connect('mongodb+srv://kelseyberta:Bruce2021@cluster0.dclygpn.mongodb.net/food-ordering', {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
    .catch(e => {
        console.error('Connection error', e.message);
    });

const db = mongoose.connection

module.exports = db