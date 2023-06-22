import { productModel } from '../models/stationeryApplication.js';



const getAllProducts = async (req, res) => {
  try {
    console.log("i am get all produt")
    const products = await productModel.find();
    res.json(products);
  } catch (error) {
    res.status(500).json({ error: 'Server error' });
  }
};

const postAllProducts = async (req,res) => {
    
  try{
    const productname = req.body.name;
    const productdesc=req.body.description;
    const productimage=req.body.src;
    const productprice = parseFloat(req.body.price);
    const producttype=req.body.type;
    const productcollection= req.body.collection;
    const productbrand= req.body.brand;
    const producttitle= req.body.title;

    
    const product=req.body.title;
    console.log(product);
    const newProduct= new productModel({
      Name: productname,
      type: producttype,
      brand: productbrand,
      title: producttitle,
      description: productdesc ,
      price: productprice,
      colleection: productcollection,
      src:  productimage
    });

    await newProduct.save();
    res.status(201).json(newProduct)
  }
  catch(error){
    console.error(error);
    res.status(500).json({
      error: 'Server Error'
    });

  }
}



export { getAllProducts, postAllProducts };
