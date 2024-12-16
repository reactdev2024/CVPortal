const mongoose = require('mongoose');
 
const certificationSchema = new mongoose.Schema({
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    name: { type: String, required: true },
    year: { type: Number, required: true },
    description: { type: String },
});
 
module.exports = mongoose.model('Certification', certificationSchema);