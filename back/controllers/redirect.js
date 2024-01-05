const Domain = require('../models/domains')

exports.redirectRequest = (req,res,next) => {
    const short = `${req.get('host')}${req.originalUrl}`
    Domain.findOne({short}).then(doc => {
        if (doc) {
            res.redirect(doc.original)
        }else {
            next()
        }
    })
}