const expressAsyncHandler = require("express-async-handler");
const express = require('express');
const Tree  = require("../models/Tree");
const {User} = require("../models/user");
const usersRoute = require("./usersRoute");
const treesRouter = express.Router();
usersRoute

//Create Tree App

treesRouter.post
('/',
 expressAsyncHandler(async(req,res) => {
    const {category, plantedBy, location} = req.body

 const {_id}=await User.findOne({email:plantedBy})

const newData = {
    category,
    plantedBy: _id,
    location
}

const tree = await Tree.create(newData);

if(tree) {
    res.status(200);
    res.json(tree);
}
else {
    res.status(500).send('Tree appointement failed');
}

})
);


//Get all Trees 

treesRouter.get
('/',
 expressAsyncHandler(async(req,res) => {

const tree = await Tree.find({})

if(tree) {
    res.status(200);
    res.json(tree);
}
else {
    res.status(500).send('There are no appointmenent');
}

})
);

//update
treesRouter.put
('/:id',
 expressAsyncHandler(async(req,res) =>{
const tree = await Tree.findById(req.params.id);

if (tree) {
    const updatedTree = await Tree.findByIdAndUpdate(
        req.params.id,
        req.body,
        {
            new:true,
            runValidators:true,
        }
        );
        res.status(200)
        res.json(updatedTree);

         }else 
         {
    res.status(500).send('Updated Failed');
}

})
);


//delete
treesRouter.delete('/:id',expressAsyncHandler(async(req,res)=>
{
    try {
        const tree = await Tree.findByIdAndDelete(req.params.id);
        res.status(200);
        res.send(tree);
        
    } catch (error) {
         
        res.json(error);
    }
})
);

module.exports = treesRouter;


