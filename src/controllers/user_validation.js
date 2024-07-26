// const { all } = require("axios");
const {registor} = require("../services/user_validation")
const {login} = require("../services/user_validation")
const {products,addProduct} = require("../services/products")

//registor
exports.registor = async (req, res) => {
    try {
      const data = await registor(req, res);
      if (data.success) {
        res.status(200).json(data);
      }
      else{
          res.status(403).json(data);
      }
    } catch (error) {
      console.log("Error:", error);
    }
  };


  exports.products = async (req, res) => {
    try {
      const data = await products(req, res);

      if (data.success) {
        res.status(200).json(data);
      }
      else{
          res.status(403).json(data);
      }
    } catch (error) {
      console.log("Error:", error);
    }
  };

  

// login
  exports.login = async (req, res) => {
    try {
      const data = await login(req, res);
      
      if (data.success) {
        res.status(200).json(data);
      }
      else{
          res.status(403).json(data);
      }
    } catch (error) {
      console.log("Error:", error);
    }
  };

exports.addProduct = async(req,res)=>
{
  try {
    const data = await addProduct(req, res);
    
    if (data.success) {
      res.status(200).json(data);
    }
    else{
        res.status(403).json(data);
    }
  } catch (error) {
    console.log("Error:", error);
  }
}
