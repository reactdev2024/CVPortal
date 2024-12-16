const mongoose = require('mongoose');
 
const connectDB = async () => {
    try {
        const conn = await mongoose.connect('mongodb+srv://shaikhtausif71:yAFDTjeNizCocHJK@muradcluster.yubqd.mongodb.net/CVPortalDB?retryWrites=true&w=majority&appName=MuradCluster');
console.log(`MongoDB Connected: ${conn.connection.host}`);
    } catch (error) {
        console.error(`Error: ${error.message}`);
        process.exit(1);
    }
};
 
module.exports = connectDB;