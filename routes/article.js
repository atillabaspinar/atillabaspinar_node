const express = require('express');
const articleController = require('../controllers/article');

const router = express.Router();


router.get('/articles', articleController.getArticles);

router.post('/articles', articleController.postArticles);

router.post('/article', articleController.postAddArticle);

module.exports = router;