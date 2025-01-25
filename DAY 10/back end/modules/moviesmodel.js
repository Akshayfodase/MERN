const mongoose = require('mongoose');

const moviesSchema= new mongoose.Schema(
{
    "moviename": "String",
    "eroiner": "String",
    "heroine":"string",
    "year": "stringr",
  "rating":"stringr",
   "genre":"stringr",
}) 

const moviesmodel = mongoose.model("moivedata", moviesSchema);
module.exports = moviesmodel