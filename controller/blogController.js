const BlogModel = require('./../model/blogModel')


const getAllBlogs = async (req, res) => {

    try{
        const blogs = await BlogModel.find()

        res.render('home', {title: 'Home', blogs})

    }catch(error){
        // console.log(error)
        // res.status(500).render(error)
        res.status(404).render('404', {title: 'page not found'})
    }

}


const addBlog = async (req, res) => {
    const { title, description, body } = req.body

    const blog = new BlogModel({
        title,
        description,
        body
    })

    try{
        const results = await blog.save()
        if(results) res.redirect('/')
    }catch(error){
        console.log(error)
        res.status(500).send(error)
    }

    console.log(req.body)
}


const createBlog = (req, res) => {
    res.render('create', {title: 'Create a blog'})
}


const fetchBlog = async (req, res) => {
    const {id} = req.params

   
    try {
        const display = await BlogModel.findById(id)
        
         res.render ('details', { title: 'Blog Details', blog: display})
        
    } catch (error) {
        console.log(error);
    }

}


const deleteBlog =  async (req, res) => {
    try {
    const result = await BlogModel.findByIdAndDelete(req.params.id)

    if(result) res.status(200).json({msg: "Deleted successfully", redirect: '/'})
}catch (error) {
    res.status(500).send(error)
}
  
}

module.exports = {
    getAllBlogs,
    addBlog,
    createBlog,
    fetchBlog,
    deleteBlog
}