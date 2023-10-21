const express = require('express')
const mongoose = require('mongoose')
// const BlogModel = require('./model/blogModel')
const UserModel = require('./model/userModel')
const blogRoutes = require('./routes/blogRoutes')
const morgan = require('morgan')
const PORT = process.env.PORT || 5000

let app = express()
let ejs = require('ejs');
app.set('view engine', 'ejs')

//middleware
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(morgan('dev'))

//EJS
app.use(express.static('public'))
//app.use(blogRoutes)
app.use('/blogs', blogRoutes)



//mongodb connection string
// const mongoUri = "mongodb+srv://angel:angel@cluster0.xdftpmk.mongodb.net/blogDB?retryWrites=true"
// const mongoUri = "mongodb://127.0.0.1:27017/blogDB"

//connect mongoose to the express server
mongoose.connect(mongoUri).then((connect) => {
    if(connect) console.log('mongoDb connected')
}).catch((err) => {
    console.log(err)
})


app.get('/', (req, res) => {
    res.redirect('/blogs')
})




app.get('/about', (req, res) => {
    res.render('about', {title: 'Create'})
})


//catch all
app.use((req, res) => {
    // res.sendFile(__dirname + '/views/404.html')

    res.status(404).render('404', {title: 'Page not found'})
})


app.listen(PORT, () => console.log(`Server is running on port ${PORT}`))