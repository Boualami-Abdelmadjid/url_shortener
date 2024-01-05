const bcrypt = require("bcrypt");

const User = require("../models/users");

const logger = require('../logger')

exports.postLogin = (req, res, next) => {
    const { email, password } = req.body;
    User.findOne({ email }).then(async (user) => {
        if (user) {
        const correct_password = await bcrypt.compare(password, user.password);
        if (correct_password) {
            req.session.isLoggedIn = true;
            req.session.user = {_id : user._id }
            req.session.save((err) => {
            res.cookie('sessionId',req.session.id)
            res.json({status:200,username:email,message:'Logged In Successfully'});
            logger.info(`${user.email} connected`)
            });
        }
        } else {
        logger.error("No user with this email");
        res.status(500).json({status:500,message:'No user with this email'})
    }
    });
};

exports.postSignup = (req, res, next) => {
    const { email, password, password2 } = req.body;
    User.findOne({ email: email }).then(async (user) => {
        if (user) {
            console.log("Email already used");
            res.status(500).json({message:'Email already in use'})
        } else {
        if (password == password2) {
            const hashed_password = await bcrypt.hash(password, 12);
            const user = new User({
                email,
                password: hashed_password,
            });
            user.save().then((_) => {
                res.json({status:200,message:'Signed up successfully'})
            });
        } else {
            console.log("Passwords do not match");
            res.redirect("/signup");
        }
        }
    });
};