// add comment
// get all posts comments for post
// edit your comment
// delete your comment
// count comments

const express = require('express');
const mongoose = require('mongoose');
const bodyparser = require('body-parser');
const cors = require('cors');
const session = require('express-session');

//add models
const Post = require('./models/postSchema');

// validate post
const validateLogin = [
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
