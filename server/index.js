require('dotenv').config();
const express = require('express');
const cors = require('cors');
const repoRoutes=require('./routes/repos');
const apiTesterRoutes = require('./routes/api-tester');
const aiRoutes=require('./routes/ai.js');

const authRoutes = require('./routes/auth');

const app = express();
app.use(cors({ origin: 'http://localhost:3000' }));
app.use(express.json());
app.use('/auth', authRoutes);
app.use('/repos', repoRoutes);
app.use('/api-tester', apiTesterRoutes);
app.use('/ai',aiRoutes);
app.listen(process.env.PORT, () => {
  console.log(`Server running on port ${process.env.PORT}`);
});