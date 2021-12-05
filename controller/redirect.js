const Url = require('../model/url');

module.exports = async (req, res, next) => {
    try {
        const urlCode = req.params.code;
        const url = await Url.findOne({ urlCode }).lean().exec();
        if (!url) return res.status(404).json('No URL Found');
        await Url.updateOne({ urlCode }, { click_time: url.click_time + 1 });
        return res.redirect(url.longUrl);

    } catch (e) {
        res.status(500).json('Server Error')
    }

};