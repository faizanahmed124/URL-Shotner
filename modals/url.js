const mongoose = require('mongoose');

const urlSchema = new mongoose.Schema(
    {
        shortId: {
            type: String, // Changed `string` to `String`
            required: true,
            unique: true,
        },
        redirectURL: {
            type: String, // Changed `string` to `String`
            required: true,
        },
        visitHistory: [
            {
                timestamp: {
                    type: Number, // Kept `Number` as it's correct
                },
            },
        ],
    },
    { timestamps: true } // Ensure timestamps are correctly applied
);

const URL = mongoose.model('URL', urlSchema); // Capitalized model name for convention
module.exports = URL;
