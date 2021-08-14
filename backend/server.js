const express = require('express');
var http = require('http');
const mongoose = require('mongoose');
const dbConnect = require('./config/dbConnect');
const { User } = require('./models/user');
const usersRoute = require('./routes/usersRoute');
const error = require('./middlewares/errorMiddlewareHandler');


const app = express();
const cors = require('cors');
app.use(cors());
const dotenv = require('dotenv');
const treesRoutes = require('./routes/treesRoutes');


dotenv.config();

//db connect
dbConnect();

//Passing body data
app.use(express.json());

//Routes
//Users
app.use('/api/users',usersRoute);

//Trees
app.use('/api/trees',treesRoutes);

console.log(process.env.MY_NAME);

//Error middle ware
app.use(error.errorMiddlewareHandler);


//Start Server
const PORT = process.env.PORT || 9000;
app.listen(PORT, () =>{
console.log(`Server is up and running 9000`);
});