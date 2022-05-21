const createError = require('http-errors');
const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const cors = require('cors');
const indexRouter = require('../src/routes/router');
const PORT = process.env.PORT || 3000;
const app = express();
 
 app.use(express.json());
app.use(bodyParser.json({limit: '50mb'}));
 
app.use(bodyParser.urlencoded({
  limit: '50mb', extended: true
}));
 
app.use(cors());
app.use(express.static(path.resolve()));
// console.log(express.static(path.join(__dirname, 'public')))
app.use('/api', indexRouter);
 
// Handling Errors
app.use((err, req, res, next) => {
     console.log(err);
    err.statusCode = err.statusCode || 500;
    err.message = err.message || "Internal Server Error";
    res.status(err.statusCode).json({
      message: err.message,
    });
});
 
app.listen(PORT,() => console.log('Server is running on port 3000'));