// payment and redirect for registration
// get all users
// get top users
// get one user
// edit user (put)
// filter all users
// get friend users

const express = require('express');
const bcrypt = require('bcrypt');
const { check, validationResult } = require('express-validator/check');
const router = express.Router();

//add models
const User = require('../models/User');


// validate input fields
const validateRegistration = [
    check('firstName')
        .not()
        .isEmpty()
        .withMessage('Please fill in your first name')
        .matches(/^([A-z]|\s)+$/)
		.withMessage('Name should not contain any numbers'),
    check('lastName')
        .not()
        .isEmpty()
        .withMessage('Please fill in your last name')
        .matches(/^([A-z]|\s)+$/)
    	.withMessage('Name should not contain any numbers'),
    check('email')
        .not()
        .isEmpty()
        .withMessage('Please fill in your email')
        .isEmail()
        .withMessage('Please enter correct email')
        .custom(value => {
        	return User.findOne({ email: value }).then(function(user) {
        		if (user) {
        			throw new Error('This email is already in use');
        		}
    		});
    	}),
    check('password')
        .not()
        .isEmpty()
        .withMessage('Please fill in your password')
        .isLength({ min: 8 })
        .withMessage('Password should contain at least 8 characters')
        .isAlphanumeric()
        .withMessage('Password should contain only letters and numbers'),
    check('password_conf')
        .not()
        .isEmpty()
        .withMessage('Please fill in your password confirmation')
        .custom(function(value, { req }) {
    		if (value !== req.body.password) {
    			throw new Error("Password don't match");
    		}
    		return value;
    	})
];

const validateLogin = [
    check('email')
        .not()
        .isEmpty()
        .withMessage('Please fill in your email'),
    check('password')
        .not()
        .isEmpty()
        .withMessage('Please fill in your password')
];

// check authorization
const authCheck = (req, res, next) => {
	if (req.session.user) {
		return next();
	}
	return res.status(401).send({ isLoggedIn: false });
};

//--------------------------------------------------------------

//register

router.post('/registration', validateRegistration, (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
		return res.status(400).json({ errors: errors.mapped() });
    }
    //after redirect to payment and then next
    const user = new User(req.body);
    user.password = user.hashPassword(user.password);
    user.save()
        .then(user => {
            return res.json({
				ok: true,
				message: 'You are successfully registered. Please Log in'
			});
        })
        .catch(err => {
            return res.status(400).json({ errors: { auth: { msg: 'Oooops... Something went wrong!' }}});
    });
});

// login
router.post('/login', validateLogin, (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.mapped() });
    }
    User.findOne({ email: req.body.email })
        .then(user => {
            if (!user) {
				return res.status(400).send({ errors: { auth: { msg: 'User does not exist!' } } });
			}
			if (!user.comparePassword(req.body.password, user.password)) {
				return res.status(400).send({ errors: { auth: { msg: 'Wrong password!' } } });
			}
			req.session.user = user;
			return res.send({ message: 'You are signed in' });
        })
});

//check authorization
router.get('/auth', (req, res) => {
    if (req.session.user) res.send('success');
    return res.status(401).send({ isLoggedIn: false });
});

//logout
router.get('/logout', (req, res) => {
   req.session.destroy();
   res.send('Logged out');
});

//get all users
// router.get('/getcontacts', (req, res) => {
//     Contact.find()
//     .populate('user', 'name')
//     .sort({ createdAt: 'desc' })
//     .then(contacts => {
//         res.json(contacts);
//     })
//     .catch(err => res.json(err));
// });


//get user by id
/* router.get('/contact/:id', (req, res) => {
    Contact.findById(req.params.id)
    .populate('user', 'name')
    .then(contact => {
        res.json(contact);
    })
    .catch(error => {
        res.json(error);
    });
}); */

module.exports = router;
