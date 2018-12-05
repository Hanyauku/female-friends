// add post ----- doen
// get all posts ---- doen
// get one post read more ---- doen
// get all posts from one user
// edit your posts ----- doen
// delete your post ---- doen
// filter post
// count posts by user ---- doen

const express = require('express');
const mongoose = require('mongoose');
const bodyparser = require('body-parser');
const cors = require('cors');
const session = require('express-session');
const { check, validationResult } = require('express-validator/check');
const router = express.Router();

//add models
const Post = require('../models/Post');
const User = require('../models/User');

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

// check authorization
const authCheck = (req, res, next) => {
	if (req.session.user) {
		return next();
	}
	return res.status(401).send({ isLoggedIn: false });
};
/// add activityPlus for top users
const activityPlus = (req, res, next) => {
    User.findOneAndUpdate({_id : req.session.user._id}, {$inc : {'activity' : 1}})
    .then(() => {
        return next()
    })
    .catch(err => {
        return res.status(400).json({
            err
        });
    })
};

/// add activityMins for top users
const activityMin = (req, res, next) => {
    User.findOneAndUpdate({_id : req.session.user._id}, {$inc : {'activity' : -1}})
    .then(() => {
        return next()
    })
    .catch(err => {
        return res.status(400).json({
            err
        });
    })
};


///// create new post
router.post('/creataepost', authCheck, validatePost, activityPlus,(req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
		return res.status(400).json({ errors: errors.mapped() });
    }
    else{
    const post = new Post(req.body);
    post.user=req.session.user._id;
    post.save()
        .then(post => {
            return res.json({
				ok: true,
				message: 'Your post is successful'
			});
        })
        .catch(err => {
            return res.status(400).json({ errors: { auth: { msg: 'Oooops... Something went wrong!' }}});
        });
}});
///////////

// get all posts
router.get('/getallposts', (req, res) => {
    Post.find()
    .sort({ createdAt: 'desc' })
    .then(posts => {
        res.json(posts);
    })
    .catch(err => res.json(err));
});
//////

////get one Post by id
router.get('/readmore/:id', (req, res) => {
    Post.findById({_id:req.params.id})
    .then(post => {
        res.json(post);
    })
    .catch(error => {
        res.json(error);
    });
});


////Edit post data
router.put('/edit-post/:id', authCheck, (req, res) => {
    // res.send(req.session.user._id);
        
        Post.findByIdAndUpdate(req.params.id, req.body, {new: true})
        .then(post => {
            return res.json(post);
        })
        .catch(error => {
            res.json(error);
        });

});

////delete post 
router.delete('/delete/:id', authCheck, activityMin,(req, res) => {
    // res.send(req.session.user._id);
    
        Post.findByIdAndRemove({_id:req.params.id})
        .then(post => {
            return res.json('Your post is deleted');
        })
        .catch(error => {
            res.json(error);
        });

});

module.exports = router;
