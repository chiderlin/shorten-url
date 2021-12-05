const mongoose = require('mongoose');

const schema = new mongoose.Schema({
    urlCode: String,
    longUrl: String,
    shortUrl: String,
    click_time: { type: Number, default: 0 },
    date: {
        type: String,
        default: Date.now
    }
});

module.exports = mongoose.model('url', schema);