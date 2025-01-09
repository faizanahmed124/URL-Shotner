const shortid = require('shortid'); // Correct import
const URL = require('../modals/url');

async function handeGenerateNewShortUrl(req, res) {
    const body = req.body;

    // Validate input
    if (!body.url) {
        return res.status(400).json({ error: 'URL is required' });
    }

    // Generate a short ID
    const shortID = shortid.generate(); // Correct method to generate ID

    // Create a new entry in the database
    try {
        const newUrl = await URL.create({
            shortId: shortID, // Match the field name in your schema (shortId, not shortid)
            redirectURL: body.url,
            visitHistory: [],
        });

        return res.status(201).json({ id: shortID, message: "Short URL created successfully", data: newUrl });
    } catch (error) {
        console.error('Error creating short URL:', error);
        return res.status(500).json({ error: 'Internal server error' });
    }
}

module.exports = {
    handeGenerateNewShortUrl,
};
