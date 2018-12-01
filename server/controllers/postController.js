// add post
// get all posts
// get one post
// get all from user
// edit your posts
// delete your post
// filter post
// count posts by user

const express = require('express');
const mongoose = require('mongoose');
const bodyparser = require('body-parser');
const cors = require('cors');
const session = require('express-session');
const { check, validationResult } = require('express-validator/check');
const router = express.Router();

//add models
const Post = require('../models/Post');

// validate post
const validatePost = [
    check('title')
        .not()
        .isEmpty()
        .withMessage('Please fill in some title'),
    check('body')
        .not()
        .isEmpty()
        .withMessage('Please write something first')
];

 //post
 /*
router.post('/addcontact', authCheck, validateContact, (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.mapped() });
    }
    const contact = new Contact(req.body);
    contact.user = req.session.user._id;
    contact.save()
    .then(contact => {
        return res.json({
            success: true
        });
    })
    .catch(err => {
        return res.status(400).json(err);
    });
}); */

module.exports = router;
