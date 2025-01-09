const express = require('express')
const app = express()
const urlRoute = require ('./routes/url')
const connectToMongoDB = require('./connect');


connectToMongoDB('mongodb://127.0.0.1:27017/urlshotner')

.then(() => console.log(" Connected to MongoDB"))
app.use (express.json())

app.use ("/url" , urlRoute)



app.listen(4000 ,() => {
    console.log(" Hello From server ")
})