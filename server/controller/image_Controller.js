import grid from 'gridfs-stream';
import mongoose from "mongoose"; 


const url="http://localhost:8000"

let gfs,gridFsBucker;
const cons=mongoose.connection;

cons.once('open',()=>{
    gridFsBucker=new mongoose.mongo.GridFSBucket(cons.db,{
        bucketName:"fs"
    });
    gfs=grid(cons.db,mongoose.mongo);
    gfs.collection('fs');

})

export const uploadFile=(req,res)=>{
    if(!req.file){
        return res.status(404).json("file not found");
    }
    const imageUrl=`${url}/file/${req.file.filename}`;
    return res.status(200).json(imageUrl);
}

export const getImage=async(req,res)=>{
    try{
        const file = await gfs.files.findOne({filename:req.params.filename});
        const readStream=gridFsBucker.openDownloadStream(file._id);
        readStream.pipe(res);
    }catch(e){
        return res.status(500).json(e.message);
    }
}