import { accountModel } from '../models/accountModel.js';

export const getAccount = (req ,res)=>{

}
 export const postAccount = async (req, res)=> {
    const result = req.body;
    console.log(result);
    console.log("create account reached ..");
    try{
        const email = req.body.email;
        const password=req.body.password;
    
        
        
        
        
        const account= new accountModel({
          email: email,
          password: password,
         
        });
    
        await account.save();
        res.status(201).json(account)
      }
      catch(error){
        console.error(error);
        res.status(500).json({
          error: 'Server Error'
        });
    
      }

}

