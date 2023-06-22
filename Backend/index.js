import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
// import bodyParser from 'body-parser';
import products from './routes/product.js';
import account from './routes/account.js';

const app = express();
const url =  "mongodb+srv://irfanum:123@cluster0.6zu534c.mongodb.net/";
const connection = mongoose.connect(url , { useUnifiedTopology: true, useNewUrlParser: true });

connection.then(()=>{
    console.log("connected to server.");

}).catch((error)=>{
console.log("error");
});

app.use(cors());
app.use(express.json({extended: true}));
app.use(express.urlencoded({extended: true}));


app.use('/products',products);  
app.use('/MyAccount',account);

connection.then(()=>{
    console.log('connected to DB');
}).catch((error)=>{
    console.log(error);
})

app.listen(5000 ,()=>{
    console.log('server started port 5000...');
});

