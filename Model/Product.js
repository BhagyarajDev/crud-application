import mongoose from "mongoose";

const Productschema = new mongoose.Schema({

    product_name :{
        type:String
    },
    product_des:{
        type:String
    },
    product_img:{
        type:String
    },
    Product_price:{
        type:Number
    }

})

