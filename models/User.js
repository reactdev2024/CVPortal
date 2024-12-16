const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
 
const userSchema = new mongoose.Schema({
    firstName: { type: String, required: true },
    middleName: { type: String },
    lastName: { type: String, required: true },
    gender: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    dateOfBirth: { type: Date, required: true },
    password: { type: String, required: true },
    address: { type: String },
    country: { type: String },
    state: { type: String },
    city: { type: String },
    aboutUs: { type: String },
    twitterMailId: { type: String },
    linkedinMailId: { type: String },
    ImageUrl:{type:String}
},{timestamps:true});
 
// Password encryption before saving
userSchema.pre('save', async function (next) {
    if (!this.isModified('password')) return next();
    this.password = await bcrypt.hash(this.password, 10);
    next();
});
 
module.exports = mongoose.model('User', userSchema);