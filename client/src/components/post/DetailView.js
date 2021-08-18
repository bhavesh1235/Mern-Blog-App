import {React,  useState , useEffect} from 'react'
import { Box,makeStyles, Typography } from '@material-ui/core'
import DetailImg from '../../images/detail.jpg'
import {Edit , Delete} from '@material-ui/icons'
import { Link , useHistory} from 'react-router-dom'
import { getPost , deletePost } from '../../service/api'

const useStyles= makeStyles((theme) =>({
    container:{
        padding:'0 100px',
        //it says that if scrren is less tan md then it get executed and padding is set to 0
        [theme.breakpoints.down('md')]:{
            padding: 0
        }
    },
    image:{
        objectFit:'cover',
        width:"100%",
        height:'50vh'
    },
    icons:{
        float:'right',
    },
    icon:{
        margin:5,
        border:'1px solid #878787',
        padding: 5,
        borderRadius:10,
        cursor:'pointer'
    },
    heading:{
        fontSize:38,
        fontWeight:600,
        textAlign:'center',
        margin:'50px 0 10px 0'
    },
    subheading:{
        color:'#878787',
        display:'flex',
        margin:'20px 0',
        [theme.breakpoints.down('sm')]:{
            display:'block'
        }
    },
    link:{
        textDecoration:'none',
        color:'inherit'
    }
}))

const DetailView = ({ match}) => {
    // const url="https://images.unsplash.com/photo-1543128639-4cb7e6eeef1b?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bGFwdG9wJTIwc2V0dXB8ZW58MHx8MHx8&ixlib=rb-1.2.1&w=1000&q=80";
    const classes=useStyles();
    const history=useHistory();
    const [post,setPost]=useState({});

    const deleteBlog =async ()=>{
        await deletePost(post._id)
        history.push('/')
    }

    useEffect(()=>{
        const fetchData= async ()=>{
            let data =await getPost(match.params.id);
            console.log(data);
            setPost(data);
        }
        fetchData();
    },[]);

    return (
        <Box className={classes.container}>
            <img src={post.picture || DetailImg} alt="photo" className={classes.image} />
            <Box className={classes.icons}>
                <Link to={`/update/${post._id}`}><Edit color='primary' className={classes.icon}/></Link>
                <Delete onClick={()=> deleteBlog()} color='error' className={classes.icon}/>
            </Box>
            <Typography className={classes.heading}>{post.title}</Typography>
            <Box className={classes.subheading}>
                <Link to={`/?username=${post.username}`} className={classes.link}> 
                    <Typography>Author: <span style={{fontWeight:600}}>{post.username}</span></Typography>
                </Link>
                    <Typography style={{marginLeft:'auto'}}>{new Date(post.createdDate).toDateString()}</Typography>
            </Box>
            <Typography>{post.description}</Typography>
        </Box>

    )
}

export default DetailView
