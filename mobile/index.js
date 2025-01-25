const express = require('express')
const app = express()
const port = 3000
app.use(express.json())
const mongoose = require('mongoose');
const mobilemodel = require('./modules/mobiledata');


app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.post('/addMobileData', async (req, res) => {
  try {const newdata = new mobilemodel(req.body)
    await newdata.save();
    res.send('Data sent Successfully')
  } catch (error) {
    console.log('error')
  }
})

mongoose.connect('mongodb+srv://Akshay:MGgrx0DpLBuFkfER@avcoe.kjmr6.mongodb.net/').then(() =>
console.log("Connected to mongo")
);

app.listen(port, () => {
  console.log("Example app listening on port ${port}")
})



