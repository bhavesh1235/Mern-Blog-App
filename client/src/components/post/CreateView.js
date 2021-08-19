import {React, useState , useEffect} from 'react'
import { Box,makeStyles, Typography ,FormControl,InputBase, Button, TextareaAutosize} from '@material-ui/core'
import {InsertPhoto} from '@material-ui/icons'
import CreateImg from '../../images/detail.jpg'
import { createPost , uploadFile} from '../../service/api'
import {useHistory} from 'react-router-dom'

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
    const history=useHistory();

    const [post, setPost] = useState(initialPost);
    const [file,setFile] = useState('');
    const [imageURL, setImageURL] = useState('');

    const image = post.picture ? post.picture : CreateImg;

    useEffect(()=>{
        const getImage = async()=>{
            if(file)
            {
                const data= new FormData();
                data.append("name", file.name);
                data.append("file" , file);

                const image = await uploadFile(data);
                post.picture = image.data;
                setImageURL(image.data); //done for rerendering after image has been uploaded
            }
        }
        getImage();
    },[file])

    const handleChange =(e)=>{
        setPost({ ...post, [e.target.name]: e.target.value})
    }

    const savePost = async ()=>{
        await createPost(post);
        history.push('/');
    }
    return (
        <Box className={classes.container}>
            <img src={image} alt="photo" className={classes.image}/>

            <FormControl className={classes.form}>
                <label htmlFor="fileInput">
                    <InsertPhoto color='action' fontSize='large'/>
                </label>
                <input 
                    type="file"
                    id="fileInput"
                    style={{display:'none'}}
                    onChange={(e) =>setFile(e.target.files[0])}
                />
                <InputBase onChange={(e) => handleChange(e)} 
                placeholder='title'
                className={classes.textfeild}
                name="title"
                />
                <Button onClick={()=> savePost()} variant="contained" color='primary'>Publish</Button>
            </FormControl>

            <TextareaAutosize
                onChange={(e) => handleChange(e)}
                minRows={5} 
                placeholder="Write your story/content here.....!" 
                className={classes.textarea}
                name="description"
            />
        </Box>
    )
}

export default CreateView;   