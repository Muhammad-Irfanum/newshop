import axios from "axios";

const HandlePayment =async ()=>{
 try{
    const response = await axios.post('/process-payment', { amount, orderId });
      
 }
 catch(e){
    console.log(e);
 }
}

export {HandlePayment};