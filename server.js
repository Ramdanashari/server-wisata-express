// app.js

const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const config = require('./config');
const authRoutes = require('./routes/authRoutes');
const destinasiRoutes = require('./routes/destinasiRoutes');
const userRoutes = require('./routes/userRoutes');
const fasilitasRoutes = require('./routes/fasilitasRoutes');
const ulasanRoutes = require('./routes/ulasanRoutes');
const authMiddleware = require('./Middleware/authMiddleware');
const app = express();

app.use(cors());
app.use(bodyParser.json());

// Endpoint tanpa token
app.use(authRoutes);

// Endpoint dengan token (authMiddleware digunakan di bawah ini)
app.use(authMiddleware);
app.use(userRoutes);
app.use(destinasiRoutes);
app.use(fasilitasRoutes);
app.use(ulasanRoutes);

const PORT = config.server.port;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
