import {React, useState} from 'react'
import { Box,makeStyles, Typography ,FormControl,InputBase, Button, TextareaAutosize} from '@material-ui/core'
import {InsertPhoto} from '@material-ui/icons'
import CreateImg from '../../images/detail.jpg'
import { createPost } from '../../service/api'

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
    form:{
        display:'flex',
        flexDirection:'row',
        marginTop:10
    },
    textfeild:{
        flex:1,      //so that we can write uptil full screen size
        margin:'0 30px',
        fontSize:25
    },
    textarea:{
        width:'100%',
        marginTop:40,
        border:'none',
        fontSize:18,
        '&:focus-visible':{     //on clicking on text area field basically focus we want no border to surround it
            outline:'none'
        }
    }
}))

const initialPost = {
    title: '',
    description: '',
    picture: '',
    username: 'bhavesh',
    categories: 'All',
    createdDate: new Date()
}

const CreateView = () =>{
    const classes=useStyles();

    const [post, setPost] = useState(initialPost);
    const handleChange =(e)=>{
        setPost({ ...post, [e.target.name]: e.target.value})
    }

    const savePost = async ()=>{
        await createPost(post);
    }
    return (
        <Box className={classes.container}>
            <img src={CreateImg} alt="photo" className={classes.image}/>

            <FormControl className={classes.form}>
                <InsertPhoto color='action' fontSize='large'/>

                <InputBase onChange={(e) => handleChange(e)} 
                placeholder='title'
                className={classes.textfeild}
                name="title"
                />
                <Button onClick={()=> savePost()} variant="contained" color='primary'>Publish</Button>
            </FormControl>

            <TextareaAutosize
                onChange={(e) => handleChange(e)}
                rowsMin={5} 
                placeholder="Write your story/content here.....!" 
                className={classes.textarea}
                name="description"
            />
        </Box>
    )
}

export default CreateView;   