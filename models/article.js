const getDB = require('./utils/database').getDB;

export class Article {
    constructor(name, author, content) {
        this.name = name;
        this.author = author;
        this.content = content;
    }

    save() {
        const db = getDB();
        return db.collection('articles').insertOne(this)
        .then(result => {
            console.log(result);
        }).catch(err => {
            console.log(err);
        });
    }
}

exports.Article = Article;