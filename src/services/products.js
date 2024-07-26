const product_model= require('../models/products');
const userModel = require('../models/user')


exports.products= async (req,res) =>{
    try {

        const data =  await product_model.find();
        return{
            success:true,
            data
        }

    } catch (error) {

        console.log("err of products",error)
    }
}

exports.addProduct= async(req,res)=>
{
    try{
            const userid = req.body.id;
             userModel.findById(userid)
            .populate('products') // populate the products field
            .then((userModel) => {
            console.log(userModel.products); // array of product documents
            })
            .catch((err) => {
            console.error(err);
            });

        }catch(error)
        {
            console.log("err of addproducts",error)
        }
}