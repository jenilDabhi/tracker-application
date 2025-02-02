
const transectionModel = require("../models/transectionModel");

const getAllTransection = async(req,res)=>{
    try {
        const transections = await transectionModel.find({userId:req.body.userId});
        res.status(200).json(transections)
    } catch (error) {
        console.log(error) 
        res.status(500).json(error)
    }
}

const addTransection = async(req,res)=>{
try{
    const newTransection = new transectionModel(req.body);
    await newTransection.save();
    res.status(201).send("transection createed")
}
catch(error){
    console.log(error);
        res.status(500).json(error)
}
}

module.exports={getAllTransection,addTransection}