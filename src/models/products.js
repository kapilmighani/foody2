const mongoose = require('mongoose');
const aggregatePaginate = require("mongoose-aggregate-paginate-v2");

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

productSchema.plugin(aggregatePaginate)

const product =mongoose.model("product",productSchema)

module.exports = product;


