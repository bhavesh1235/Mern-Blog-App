import grid from 'gridfs-stream'
import mongoose from 'mongoose'

const url = 'http://localhost:8000';

let gfs;
const conn= mongoose.connection;
conn.once('open' , ()=>{
    gfs = grid(conn.db , mongoose.mongo)
    gfs.collection('fs');
})

export const uploadImage = async (request ,response) =>{
    try{
        if(!request.file)
        {
            return response.status(404).json('File not Found');
        }
        const imageUrl = `${url}/file/${request.file.filename}`;
        response.status(200).json(imageUrl);
    }
    catch(err)
    {
        response.status(500).json('error while uploading the image');
    }
}

export const getImage= async(request,response)=>{
    try{
        const file =await gfs.files.findOne({filename: request.params.filename})
        //change it to image
        const readStream= gfs.createReadStream(file.filename);
        readStream.pipe(response);
    }
    catch(err){
        response.status(500).json('Failed to fetch the image');
    }
}