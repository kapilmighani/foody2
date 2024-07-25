const mongoose = require('mongoose');
const productSchema = new mongoose.Schema({
  name: {
    type: String,
  },
  description: {
    type: String,
  },
  image_url:{
    type: String,
  },
  price:{
    type: String,
  },
  discount:{
    type: String,
  },
  quantity:{
    type: String,
  }

    
});

const product =mongoose.model("product",productSchema)

module.exports = product;


