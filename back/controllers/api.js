const Domain = require("../models/domains");
const shortid = require('shortid');

exports.postShorten = (req,res,next) => {
    const { domain } = req.body
    const shortId = shortid.generate();
    const short = `${req.headers.host}/${shortId}`
    // const shorten = `bit.ly/${shortId}`
    const domain_row = new Domain({
        user:req.user._id,
        original:domain,
        short
    })
    domain_row.save().then(_ => {
        res.json({status:200,original:domain,short})
    })
}

exports.getDomains = (req,res,next) => {
    const domains = Domain.find({user:req.user._id}).sort({_id: -1}).select('original short -_id').limit(10).then(docs => {
        res.json({status:200,domains:docs})
    })
    
}

