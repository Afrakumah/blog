const { Schema, model } = require('mongoose')

const BlogSchema = new Schema({
    title:{
        type: String,
        required: true
    },

    description:{
        type: String,
        required: true
    },

    body:{
        type: String,
        required: true
    }
})

const Blog = model('Blog', BlogSchema)

module.exports = Blog

