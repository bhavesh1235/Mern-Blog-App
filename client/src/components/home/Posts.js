import { useState ,useEffect } from "react"
import Post from "./Post"
import { Grid } from "@material-ui/core"
import { Link,useLocation } from "react-router-dom"
import { getAllPosts } from "../../service/api"

const Posts = () => {
    const [posts,setPosts]=useState([]);
    const { search } =useLocation();

    useEffect(()=>{
        const fetchData= async()=>{
            const data=await getAllPosts(search); //params in url
            console.log(data);
            setPosts(data);
        }
        fetchData();
    },[search]);
    // let posts=[1,2,3,4,5,6,7,8,9]
    return (
        <>
        {posts.map(post =>(
            <Grid item lg={3} sm={4} xs={12}>
                <Link to={`/details/${post._id}`} style={{color:'inherit', textDecoration:'none'}}>
                    <Post post={post}/>
                </Link>
            </Grid>
        ))
}
        
       
        </>
    )
}

export default Posts
