// const mongoose = require('mongoose');

// const postSchema = new mongoose.Schema({
//     userId: Number,
//     id: { type: Number, unique: true },
//     title: String,
//     body: String
//   });

// const Post = new mongoose.model('Post', postSchema);

// module.exports = Post

// userId, id, title, body

const mongoose = require('mongoose');

const postSchema = new mongoose.Schema({
    id:{unidue:true, type:Number},
    userId:Number,
    title: String,
    body:String,
});

const Post = mongoose.model('Post', postSchema);

module.exports = Post;