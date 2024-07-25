const product_model= require('../models/products');



exports.products= async (req,res) =>{
    try {

        const data =  await product_model.find();
       const data_name= data.map((index)=>index.name)
       console.log(data_name);

        return{
            success:true,
            data
        }

    } catch (error) {

        console.log("err of products",error)
    }
}