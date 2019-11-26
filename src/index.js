const express = require('express');
const app = express();
const morgan = require('morgan');
const path = require('path');
const cors = require('cors');
const bodyParser = require('body-parser')


// Initializations
require('./datebase');
const User = require('./models/User');

// Settings
app.set('port', process.env.PORT || 3000);
app.use(cors());

// Middlewares
app.use(morgan('dev'));
app.use(express.json()); //Module Json

// Body Parser Middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Global variables
app.use((req, res, next) => {

    next();
});

// Routes
app.use(require('./routes'));

// Static files
app.use(express.static(path.join(__dirname, 'public')));

// Server is listening
app.listen(app.get('port'), () => {
    console.log('Server on port', app.get('port'));
  });