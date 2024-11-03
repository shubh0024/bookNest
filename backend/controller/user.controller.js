import User from '../model/user.model.js';
import bcrypt from 'bcrypt';
// Create and Save a new User

export const signup = async (req,res) =>{
    try {
    const {name,email,password} = req.body;

    const user=await User.findOne({email})

    if(user){
        return res.status(400).json({message:'User already exists'});
    }

    const hashpassword = await bcrypt.hash(password,10); //10 saltrounds


    
    const newUser =await new User({
        name,
        email,
        password:hashpassword,
    })
     await newUser.save(); //its save the user in the database
    res.status(201).json({message:'User created successfully',user:newUser});
}
catch(err){
    console.error("Error"+err.message);
    res.status(500).send('Internal Server Error');
}
}

export const login = async(req,res) =>{
    try{
        const {email,password} = req.body;
        const user = await User.findOne({email});
 
        const passwordismatch = await bcrypt.compare(password,user.password);
    
        if(!user || !passwordismatch){
            return res.staus(400).json({message:"Ivalid user name or password"})
        }else{
            res.status(200).json({message:"login SuccessFully ",user:{
                _id:user._id,
                name:user.name,
                email:user.email,
            }})
        }

    }catch(error){
        console.error("Error"+error.message);
        res.status(500).send('Internal Server Error');
    }
    

}