const validUrl = require('valid-url');
const shortid = require('shortid');
const Url = require('../model/url');
const baseUrl = 'http://localhost:5000';


module.exports = async (req, res, next) => {
    const { longUrl } = req.body;

    if (!validUrl.isUri(baseUrl)) {
        return res.status(401).json('Invalid base URL');
    }
    if (!validUrl.isUri(longUrl)) {
        res.status(401).json('Invalid longUrl')
    }
    const urlCode = await shortid.generate();

    try {
        let url = await Url.findOne({ longUrl }).lean().exec();
        if (!url) {
            const shortUrl = baseUrl + '/' + urlCode;
            url = new Url({
                longUrl,
                shortUrl,
                urlCode
            })
            await url.save()
        }
        return res.json(url)

    } catch (e) {
        res.status(500).json({ status: 'server Error' })
    }
};
