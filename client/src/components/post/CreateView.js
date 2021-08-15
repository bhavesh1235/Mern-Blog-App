import React from 'react'
import { Box,makeStyles, Typography ,FormControl,InputBase, Button, TextareaAutosize} from '@material-ui/core'
import {InsertPhoto} from '@material-ui/icons'
import CreateImg from '../../images/detail.jpg'

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

const CreateView = () =>{
    const classes=useStyles();
    return (
        <Box className={classes.container}>
            <img src={CreateImg} alt="photo" className={classes.image}/>

            <FormControl className={classes.form}>
                <InsertPhoto color='action' fontSize='large'/>

                <InputBase placeholder='title' className={classes.textfeild}/>
                <Button variant="contained" color='primary'>Publish</Button>
            </FormControl>

            <TextareaAutosize
                rowsMin={5} placeholder="Write your story/content here.....!" className={classes.textarea}
            />
        </Box>
    )
}

export default CreateView;   