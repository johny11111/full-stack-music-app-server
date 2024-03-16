const mongoose = require('mongoose');

const albumSchema = mongoose.Schema(
    {
        name: {
            type: 'string',
            required: true,
        },
        image: {
            type: 'string',
            required: true,
        },

        playlist: {
            type: 'array',
            required: false,
        }
    },
    { timestamps: true }
);

module.exports = mongoose.model('album', albumSchema)