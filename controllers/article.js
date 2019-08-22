const Article = require('../models/article').Article;
exports.getArticles = (req, res, next) => {
    res.status(200).json({
        article: [{title: 'dsfsd'}]
    });
};

exports.postArticles = (req, res, next) => {
    res.status(200).json({
        article: [{title: 'dsfsd'}]
    });
};

exports.postAddArticle = (res, req, next) => {
    
    const article = new Article('deneme', 'user1', '<div>hello</div');
    console.log('postAddArticle called with ', article);
    article.save();
}