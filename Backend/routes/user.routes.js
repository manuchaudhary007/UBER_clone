const express = require('express');
const router = express.Router();
const { body } = require('express-validator');
const userController = require('../controllers/user.controllers');

router.post('/register', [
    body('email').isEmail().withMessage('Invalid Email'),
    body('fullname.firstname').isLength({ min: 3 }).withMessage
        ('Firstname must be contain 3 character'),
    body('fullname.lastname').isLength({ min: 3 }).withMessage
        ('Lastname must be contain 3 character'),
    body('password').isLength({ min: 8 }).withMessage
        ('Password must be at least 8 characters long')
],
    userController.registerUser
)


module.export = router;