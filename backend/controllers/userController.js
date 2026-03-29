import userModel from "../models/userModel.js";


// Route for user login
const loginUser=async(req,res)=>{

}

// Route for user Register
const registerUser=async(req,res)=>{
  try {
    
    const {name,email,password}=req.body;

    // Checking user already exsits or not
    const exsits=await userModel.findOne

  } catch (error) {
    
  }
}

// Route for admin login
const adminLogin=async(req,res)=>{

}

export {loginUser,registerUser,adminLogin}

