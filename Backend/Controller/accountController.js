import { accountModel } from '../models/accountModel.js';
import jwt from 'jsonwebtoken';
// import bcrypt from 'bcrypt';

export const getAccount = async (req ,res)=>{
  console.log(req.body);
  const { email, password } = req.body;
  try {
    const oldUser = await accountModel.findOne({ email });
    if (!oldUser)
      return res.status(404).json({ message: "User doesn't exist" });
  
    // const isPasswordCorrect = bcrypt.compare(password, oldUser.password);
    const isPasswordCorrect = oldUser.password === password;
    
    if (!isPasswordCorrect)
      return res.status(400).json({ message: 'Invalid credentials' });

    const token = jwt.sign({ email: oldUser.email, id: oldUser._id }, 'test', {
      expiresIn: '1h',
    });
    console.log(token)

    res.status(200).json({ result: oldUser, token });
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: 'Something went wrong' });
  }
}
 export const postAccount = async (req, res)=> {
    const result = req.body;
    console.log(result);
    console.log("create account reached ..");
    try{
        const email = req.body.email;
        const password=req.body.password;
    
        // const hashedPassword = await bcrypt.hash(password, 12);
        
        const account= new accountModel({
          email: email,
          // password: hashedPassword,
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

