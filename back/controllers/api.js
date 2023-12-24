const Domain = require("../models/domains");
const shortid = require('shortid');

exports.postShorten = (req,res,next) => {
    const { domain } = req.body
    const shortId = shortid.generate();
    const shorten = `${req.headers.host}/${shortId}`
    const domain_row = new Domain({
        user:req.user._id,
        original:domain,
        short:shorten
    })
    domain_row.save().then(_ => {
        res.json({status:200,original:domain,shorten})
    })
}

exports.getDomains = (req,res,next) => {
    console.log(req.user)
    res.json({status:200})
}