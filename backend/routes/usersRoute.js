const express = require('express');
const { User } = require('../models/user');
const usersRoute = express.Router();
const asynHandler = require('express-async-handler');
const bcrypt = require('bcryptjs');
const generateToken = require('../utils/generateToken');
User

//Register
usersRoute.post('/register',
 asynHandler(async(req,res)=> {
    const {name,email,password} = req.body;
const userExists = await User.findOne({email:email});
if(userExists) {
    throw new Error('User Exist');
}
const userCreated = await User.create({email,name,password});
res.json({
    _id: userCreated._id,
    name: userCreated.name,
    password: userCreated.password,
    email: userCreated.email,
    token: generateToken(userCreated._Id),
});

})
);

//Login Route
usersRoute.post(
    '/login',
    asynHandler(async (req, res) => {
      const { email, password } = req.body;
  
      const user = await User.findOne({ email });
  
      if (user && (await user.isPasswordMatch(password))) {
        //set status code
        res.status(200);
  
        res.json({
          _id: user._id,
          name: user.name,
          password: user.password,
          email: user.password,
          token: generateToken(user._id),
        });
      } else {

        throw new Error('Invalid credentials');
      }
    })
  );
//Update user
usersRoute.put('/update',(req,res) => {
    res.send('update route');
 });
 
//delete user
usersRoute.delete('/:id',(req,res) => {
    res.send('delete route');
 });

 
usersRoute.get('/',(req,res) =>{
    res.send('fetch users');
});

module.exports = usersRoute;
