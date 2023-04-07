const userRoutes = require('./postRoutes');
const postRoutes = require('./userRoutes');
const axios = require('axios');

axios.use('/users', userRoutes);
axios.use('/post', postRoutes);

module.exports = axios;