const express = require('express');
const articleController = require('../controllers/article');

const router = express.Router();

router.get('/articles', articleController.getArticles);

router.post('/articles', articleController.postArticles);

module.exports = router;