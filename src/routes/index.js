const express = require('express');
const userRoutes = require('./userRoutes');

const router = express.Router();

// 挂载用户路由
router.use('/users', userRoutes);

module.exports = router;
