const mongoose = require('mongoose');


const userSCM = mongoose.Schema({
    name: {
        type: 'string',
        required: true,
    },
    email: {
        type: 'string',
        required: true,
    },
    image: {
        type: 'string',
        required: true,
    },
    userId: {
        type: 'string',
        required: true,
    },
    emailVerified: {
        type: Boolean,
        required: true,
    },
    role: {
        type: "string",
        required: true,
    },
    authTime: {
        type: "string",
        required: true,
    },
},
    { timestamps: true }
);

module.exports = mongoose.model('User', userSCM)