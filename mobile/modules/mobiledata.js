const mongoose = require('mongoose');

const mobileSchema= new mongoose.Schema(
{
Name: String,
brand: String,
ram: Number,
prize: Number,

}) 

const mobilemodel = mongoose.model("mobiledata", mobileSchema);
module.exports = mobilemodel