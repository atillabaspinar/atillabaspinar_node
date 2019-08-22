const getDB = require('../utils/database').getDb;

class Article {
    constructor(name, author, content) {
        this.name = name;
        this.author = author;
        this.content = content;
    }

    save() {
        const db = getDB();
        return db.collection('articles').insertOne(this)
        .then(result => {
            console.log('Article success', result);
        }).catch(err => {
            console.log('Article Err', err);
        });
    }
}

exports.Article = Article;