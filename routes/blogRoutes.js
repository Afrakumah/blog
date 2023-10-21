const express = require('express');
const blogController = require('./../controller/blogController')


// const BlogModel = require('./../model/blogModel')

const router = express.Router();

router.get('/', blogController.getAllBlogs)

//router.post('/api/blog-post', async (req, res) => {
    //('/blogs/blogs')
router.post('/', blogController.addBlog)


router.get('/create', blogController.createBlog)


 //REDIRECT A PAGE 
 router.get('/index-us', (req, res) => {
    res.redirect('/index')
})

// directing to details
router.get ('/:id', blogController.fetchBlog)


router.delete('/:id', blogController.deleteBlog)

module.exports = router;