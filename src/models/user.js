// Here's an updated version of your user schema that includes an array of product IDs:


const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const product = require('./products')
const userSchema = new mongoose.Schema({
  // _id: mongoose.Schema.Types.ObjectId,
  email: {
    type: String,
    required: true,
    trim: true,
    index: true,
    unique: true
  },
  username: {
    type: String,
    required: true,
    trim: true
  },
  location: {
    type: String,
    trim: true
  },
  password: {
    type: String,
    required: true
  },
  user_authkey: {
    type: String,
    trim: true
  },
  products: [{ // array of product IDs
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Product'
  }]

});

// Hash password before saving
userSchema.pre('save', async function(next) {
  if (this.isModified('password')) {
    this.password = await bcrypt.hash(this.password, 10);
  }
  next();
});

const user = mongoose.model("user", userSchema);

module.exports = user;


// When a customer clicks the "buy" button, you can add the product ID to the user's products array like this:


// const userId = '...'; // ID of the user who clicked "buy"
// const productId = '...'; // ID of the product being purchased

// user.findByIdAndUpdate(userId, {
//   $push: { products: productId }
// }, { new: true })
// .then((user) => {
//   console.log(user);
// })
// .catch((err) => {
//   console.error(err);
// });


// // This will add the product ID to the user's products array. You can then retrieve the user's purchased products by populating the products field:


// user.findById(userId)
// .populate('products')
// .then((user) => {
//   console.log(user.products); // array of purchased products
// })
// .catch((err) => {
//   console.error(err);
// });
