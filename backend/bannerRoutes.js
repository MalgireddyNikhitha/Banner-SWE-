const express = require('express');
const router = express.Router();
const { getBanner, updateBanner } = require('./bannerController');

router.get('/banner', getBanner);
router.post('/banner', updateBanner);

module.exports = router;
