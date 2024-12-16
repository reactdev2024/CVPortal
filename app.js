const express = require('express');
const connectDB = require('./util/MongoDBConnect');
// const userRoutes = require('./routes/userRoutes');
// const skillRoutes = require('./routes/skillRoutes');
// const languageRoutes = require('./routes/languageRoutes');
// const educationRoutes = require('./routes/educationRoutes');
// const workRoutes = require('./routes/workRoutes');
// const certificationRoutes = require('./routes/certificationRoutes');
 
const app = express();
connectDB();
 
app.use(express.json());
 
// Routes
// app.use('/api/users', userRoutes);
// app.use('/api/skills', skillRoutes);
// app.use('/api/languages', languageRoutes);
// app.use('/api/education', educationRoutes);
// app.use('/api/work', workRoutes);
// app.use('/api/certifications', certificationRoutes);
 
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});