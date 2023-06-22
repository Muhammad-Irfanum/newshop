import mongoose from "mongoose";


const productStructure = mongoose.Schema({
    Name: String,
    type: String,
    brand: String,
    title: String,
    description: String,
    price: Number,
    colleection: String,
    src:  String
})

const productModel = mongoose.model("product",productStructure);

export {productModel };