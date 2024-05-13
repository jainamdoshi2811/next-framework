import mongoose, { Schema } from 'mongoose';

const User = mongoose.model('User', new Schema({
    name: String,
    age: Number
}), 'users');

export default User;