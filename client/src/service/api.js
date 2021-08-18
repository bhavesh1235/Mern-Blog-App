import axios from 'axios'

const URL = 'http://localhost:8000'

export const createPost =async (post)=>{
    try{
        return await axios.post(`${URL}/create`,post)
    }
    catch(err){
        console.log('Error while calling createPost API', err);
    }
}

export const getAllPosts = async (param) => {
    try {
        let response = await axios.get(`${URL}/posts${param}`);
        return response.data
    } catch (error) {
        console.log('Error while calling getAllPosts API ', error)
    }
}

export const getPost = async (id) =>{
    try{
        let response = await axios.get(`${URL}/post/${id}`);
        return response.data;
    }
    catch (error) {
        console.log('Error while calling getPost API ', error)
    }
}

export const updatePost =async (id,post)=>{
    try{
        return await axios.post(`${URL}/update/${id}`, post)
    }
    catch(err){
        console.log('Error while calling updatePost API', err);
    }
}

export const deletePost =async(id)=>{
    try{
        return await axios.delete(`${URL}/delete/${id}`)
    }
    catch(err){
        console.log('Error while calling deletePost API', err);
    }
}