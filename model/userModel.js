const {Schema, model} = require('mongoose')

const UserSchema = new Schema({
    firstName:{
        type: String,
        required: true
    },

    lastName:{
        type: String,
        required: true
    },

    age:{
        type: Number,
        required: true
    },

    email:{
        type: String,
        required: true,
        unique: true
    }
}, {timestamps: true})


const User = model('User', UserSchema)

module.exports = User