import Post from '../schema/post-schema.js'

export const createPost = async (request,response) =>{
    console.log(request.body);
    try{
        const post=await new Post(request.body);
        post.save();

        response.status(200).json('post saved succssfully')
    }
    catch(err){
        response.status(500).json(err);
    }
}

export const getAllPosts = async (request,response)=>{
    //so consider example url https://details/132435?username=bhavesh
    //so part after ? is query and before it is params
    let username= request.query.username;
    let category= request.query.category;
    let posts;
    try{
        if(username)
            posts= await Post.find({ username:username });
        else if(category)
            posts= await Post.find({ categories:category });
        else
            posts= await Post.find({});//get all posts data from database
        
        response.status(200).json(posts);
    }
    catch(err){
        response.status(500).json(err);
    }
}

export const getPost = async (request, response) => {
    try {
        const post = await Post.findById(request.params.id);
        console.log(post);
        response.status(200).json(post);
    } catch (error) {
        response.status(500).json(error)
    }
}

export const updatePost =async (request,response) =>{
    try{
        await Post.findByIdAndUpdate(request.params.id , { $set : request.body});
        //it basically find the object in DB and replace it with new updated post
        response.status(200).json('Blog updated successfully')
    }
    catch(error){
        response.status(500).json(error)
    }
}

export const deletePost =async (request,response) =>{
    try{
        let post = await Post.findById(request.params.id);

        await post.delete();

        response.status(200).json('Blog updated successfully')
    }
    catch(error){
        response.status(500).json(error)
    }
}