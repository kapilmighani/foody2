const user_model= require('../models/user');
const bcrypt = require('bcryptjs');
exports.registor = async (req, res) => {
    try {
      const { email, username, location, password } = req.body;
      console.log(req.body);
  
      const existingUser = await user_model.findOne({ email });
  
      if (existingUser) {
        return { message: "User already exists", success: false };
      }
  
      const hashedPassword = await bcrypt.hash(password, 10);
      const user = await user_model.create({ email, username, location, password: hashedPassword });
  
      if (!user) {
        return { message: "User not created", success: false };
      }
  
      return { message: "User created successfully", success: true, user };
    } catch (error) {
      return { message: error.message, success: false };
    }
  };
  
  
  

//login 
exports.login = async (req, res) => {
    try {
      const { email, password } = req.body;
      console.log(req.body);
      const existingUser = await user_model.findOne({ email });
      console.log(existingUser);
  
      if (!existingUser) {
        return { message: "User not found", success: false };
      }
  
      const isPasswordMatch = await bcrypt.compare(password, existingUser.password);
  
      if (!isPasswordMatch) {
        return { message: "Wrong password", success: false };
      }
  
      return { message: "User logged in successfully", success: true, user: existingUser };
    } catch (error) {
      return { message: error.message, success: false };
    }
  };
  
  
  