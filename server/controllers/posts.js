import PostMessage from "../models/postMessage.js";



export const getpost = async (req,res)=>{
    try {
        const postMessages= await PostMessage.find();
        res.status(200).json(postMessages);
    } catch (error) {
        res.status(400).json({message:error.message})
    }
    //res.send("this works!")
};

export const createPost = async (req,res)=>{

    const post=req.body;
    const newpost=new PostMessage(post);
    try {
        await newpost.save();
        res.status(201).json(newpost);
    } catch (error) {
        res.status(409).json({message:error.message})
    }
};