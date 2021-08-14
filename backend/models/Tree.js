const mongoose = require('mongoose');

const treeSchema = new mongoose.Schema({
category: {
    type: String,
    required: [true,'Tree category is required']
},

location: {
    type: String,
    required:[true]
},

plantedBy: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
},
}, {
timestamps: true,
});

const Tree = mongoose.model('Tree', treeSchema);
module.exports = Tree;