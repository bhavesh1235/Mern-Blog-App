import mongoose from 'mongoose';


const Connection = async () =>{
    try{
    const URL="mongodb+srv://Bhavesh1234:Bhavesh1234@blog-web-app.jepzb.mongodb.net/BLOG-WEB-APP?retryWrites=true&w=majority"

    await mongoose.connect(URL , {useNewUrlParser:true, useUnifiedTopology:true,useFindAndModify:false})
    console.log('Connection Succesful');
    }
    catch(err)
    {
        console.log("error connecting to mongodb");
    }
}

export default Connection;