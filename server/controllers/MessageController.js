import Message from "../models/message_model.js";
import {mkdirSync, renameSync  }  from "fs"

export const getMessages = async (req, res, next) =>{
    try {
        const user1 = req.userId;
        const user2 = req.body.id;

        if(!user1 || !user2){
            return res.status(400).send("Both User Id's are required")
        }
        
        const messages = await Message.find({
            $or: [
                {sender: user1, recipient: user2},
                {sender: user2, recipient: user1}
            ]
        }).sort({timestamp: 1})
        return res.status(200).json({ messages});

         
        
    } catch (error) {
        console.log(error);
        return res.status(500).send("Internal Server Error");
    }
}

export const uploadFile = async (req, res, next) =>{
    try {
        if(!req.file){
            return res.status(400).send("File is Required")
        }
        const date = Date.now();
        let filedir = `uploads/files/${date}`
        let filename = `${filedir}/${req.file.originalname}`

        mkdirSync(filedir, {recursive:true});
        renameSync(req.file.path, filename);

        return res.status(200).json({ filePath: filename});

     
        
    } catch (error) {
        console.log(error);
        return res.status(500).send("Internal Server Error");
    }
}