import Post from '../schema/post-schema.js'



export const createPost = async (request,response) =>{
    console.log(request.body);
    try{
        const post=await new Post(request.body);
        post.save();

        response.status(200).json('post saved succssfully')
    }
    catch(err)
    {
        response.status(500).json(err);
    }
}