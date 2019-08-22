exports.getArticles = (req, res, next) => {
    req.status(200).json({
        article: [{title: 'dsfsd'}]
    });
};

exports.postArticles = (req, res, next) => {
    req.status(200).json({
        article: [{title: 'dsfsd'}]
    });
};