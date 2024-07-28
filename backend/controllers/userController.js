import userModel from "../models/userModel.js";
import jwt from 'jsonwebtoken'
import bcrypt from 'bcrypt'
import validator from 'validator'
import { response } from "express";

const createToken = (id) => {
    return jwt.sign({id}, process.env.JWT_SECRET)
}

//login user
const loginUser = async(req,res) => {

}

//signup user
const signupUser = async(req,res) => {
    const {name, password, email} = req.body;
    try {
        const exist = await userModel.findOne({email});
        if(exist)
        {
            return res.json({success: false, message:"User already exists."})
        }

        if(!validator.isEmail(email))
        {
            return res.json({success: false, message:"Please enter a valid email."})
        }

        if(password.length<8)
        {
            return res.json({success: false, message:"Password must be atleast 8 characters"})
        }

        const salt = await bcrypt.genSalt(12)
        const hashedPassword = await bcrypt.hash(password, salt);

        const newUser = new userModel({
            name: name,
            email: email,
            password: hashedPassword
        })

        const user = await newUser.save()

        const token = createToken(user._id)

        res.json({success: true, token})
    } catch (error) {
        console.log(error)
        res.json({success: false, message: 'Error Occured Signing You Up'})
    }   
}

export {loginUser, signupUser}