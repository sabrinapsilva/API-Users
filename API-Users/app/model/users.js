const mongoose = require('mongoose');
const Schema = mongoose.Schema; 

const UserSchema = new Schema ({
    _id: {
        type: mongoose.Schema.Types.ObjectId, auto: true, 
        required: true 
    },
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        unique: true, 
        required: true
    },   
    password: {
        type: String,
        required: true,
    }
});

const Users = mongoose.model('Users', UserSchema);

module.exports = Users;
