import React from 'react'
import { Box, Typography , makeStyles} from '@material-ui/core'
import postImg from '../../images/postimg.jpg'
const useStyles=makeStyles({
    container:{
        height:350,
        margin:10,
        border: '1px solid #d3cede',
        borderRadius:10,
        display:'flex',
        flexDirection:'column',
        alignItems:'center',
        '& > *':{
            padding:'0 5px 5px 5px'
        }
    },
    image:{
        height:150,
        width:'100%',
        objectFit:'cover',
        borderRadius:'10px 10px 0 0'
    },
    text:{
        color:'#878787',
        fontSize:12
    },
    heading:{
        fontSize:18,
        fontWeight:600
    },
    detail:{
        fontSize:14,
        wordBreak:'break-word'
    }
})
const Post = () => {
    const classes=useStyles();
    // const url="https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=752&q=80"
    return (
        <>
        <Box className={classes.container}>
            <img src={postImg} alt="photo" className={classes.image} />
            <Typography className={classes.text}>Programming</Typography>
            <Typography className={classes.heading}>Bhavesh Lokre Cp Tuto</Typography>
            <Typography className={classes.text}>Author: BHavesh Lokre</Typography>
            <Typography className={classes.detail}>I will be teach you all programming</Typography>
        </Box>
        </>
    )
}

export default Post
