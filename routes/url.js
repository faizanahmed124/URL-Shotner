const express = require ('express')
const { handeGenerateNewShortUrl } = require('../controllers/url')
const router = express.Router()


router.post( '/' , handeGenerateNewShortUrl)

module.exports = router