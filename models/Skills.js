const mongoose = require('mongoose');
 
const skillSchema = new mongoose.Schema({
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    name: { type: String, required: true },
    proficiency: { type: String, required: true },
});
 
module.exports = mongoose.model('Skill', skillSchema);