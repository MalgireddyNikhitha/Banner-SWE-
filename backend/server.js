const express = require('express');
const app = express();
const bannerRoutes = require('./bannerRoutes');
const cors = require('cors');

app.use(cors());
app.use(express.json());
app.use('/api', bannerRoutes);

app.listen(5000, () => {
  console.log('Server is running on port 5000');
});
