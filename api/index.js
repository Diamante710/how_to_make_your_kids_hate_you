const router = require('express').Router();
const userRoutes = require('./postRoutes');
const postRoutes = require('./userRoutes');

router.use('/users', userRoutes);
router.use('/post', postRoutes);

module.exports = router;