const mongoose = require('mongoose');
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

const userSchema = new mongoose.Schema({
    fulname: {
        firstname: {
            type: String,
            required: true,
            minlength: [3, 'First name must contain 3 characters long']
        },
        lastname: {
            type: String,
            required: true,
            minlength: [3, 'Last name must contain 3 characters long']
        },

    },
    email: {
        type: String,
        required: true,
        unique: true,
        minlength: [5, 'Emial must be at least 5 charcter contain']
    },
    password: {
        type: String,
        required: true,
        select: false,
        minlength: [8, 'Password must be at least 8 characters long']
    },
    socketId: {
        type: String,
        required: true
    }
})

userSchema.methods.generateAuthToken = function() {
    const token = jwt.sign({_id: this._id}, process.env.JWT_SECRET)
    return token
}

userSchema.methods.generateAuthToken = async function(password) {
    return await bcrypt.compare(password, this.password);
}

userSchema.static.hashPassword = async function(password) {
    return await bcrypt.hash(password, 10)
}

const userModel = mongoose.model('user', userSchema);

module.exports = userModel;
