const {checkSchema} = require('express-validator');

const User = require('../models/User');

exports.register = checkSchema({
    name: {
        in: ['body'],
        trim: true,
        exists: true,
    },
    email: {
        in: ['body'],
        trim: true,
        isEmail: true,
        exists: true,
        custom: {
            options: async (value , {req}) => {
                const user = await User.findOne({
                    email: value
                }).lean();
    
                // Check if email already exists.
                if (user) {
                    throw new Error('Email already exists');
                }

                return true;
            }
          }
    },
    password: {
        in: ['body'],
        trim: true,
        exists: true,
        isLength: {
            errorMessage: 'Password should be at least 5 chars long',
            options: { min: 5 },
        },
    }
});


exports.login = checkSchema({
    email: {
        in: ['body'],
        trim: true,
        isEmail: true,
        exists: true
    },
    password: {
        in: ['body'],
        trim: true,
        exists: true,
        isLength: {
            errorMessage: 'Password should be at least 5 chars long',
            options: { min: 5 },
        },
    }
});