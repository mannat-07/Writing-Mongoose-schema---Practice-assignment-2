const mongoose = require('mongoose');

const commentSchema = new Schema({
    username: {
        type: String,
    },
    message:{
        type: String,
        required: true
    },
    commentedAt:{
        type: Date,
        default: Date.now
    }
})



const blogPost = mongoose.Schema({
    title : {
        type : String,
        unique : true,
        minlength : 5,
    },
    content : {
        type : String,
        required : true,
        minlength : 50,
    },
    author : {
        type : String
    },
    tags : {
        type : [String]
    },
    category : {
        type : String,
        default : "General"
    },
    comment: [commentSchema],

    likes : {
        type : [String]
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
    updatedAt: {
        type: Date,
        default: null,
    }
    
},  {
    timestamps : true
    }
)


module.exports = mongoose.model("blogPost", blogPost);