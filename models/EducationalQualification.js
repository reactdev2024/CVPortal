const mongoose = require('mongoose');
 
const educationSchema = new mongoose.Schema({
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    universityName: { type: String, required: true },
    yearOfJoining: { type: Number, required: true },
    yearOfPassing: { type: Number, required: true },
    degreeName: { type: String, required: true },
    percentage: { type: Number, required: true },
});
 
module.exports = mongoose.model('EducationQualification', educationSchema);