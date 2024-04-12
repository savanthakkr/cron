const express = require('express');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const { sequelize, testConnection } = require('./config/db');
const cors = require('cors');
const userRoutes = require('./routes/productRoutes');
const app = express();
const PORT = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(morgan('dev'))
app.use(cors());

// Test the database connection
testConnection()
  .then(() => {
    // Routes
    
    app.use('/api', userRoutes);

    
    app.use((err, req, res, next) => {
      console.error(err.stack);
      res.status(500).send('Something went wrong!');
    });

    // Start the server
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  })
  .catch(err => {
    console.error('Unable to start server:', err);
  });
