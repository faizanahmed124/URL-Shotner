const mongoose = require('mongoose');

async function connectToMongoDB(url) {
    try {
        await mongoose.connect(url); // No need for useNewUrlParser or useUnifiedTopology
        console.log("Connected to MongoDB successfully!");
    } catch (error) {
        console.error("Failed to connect to MongoDB:", error.message);
        process.exit(1); // Exit the process if the connection fails
    }
}

module.exports = connectToMongoDB;
