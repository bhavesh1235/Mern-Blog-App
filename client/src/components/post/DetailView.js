import React from 'react'
import { Box,makeStyles, Typography } from '@material-ui/core'
import DetailImg from '../../images/detail.jpg'
import {Edit , Delete} from '@material-ui/icons'
import { Link } from 'react-router-dom'

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
        borderRadius:10
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
    }
}))

const DetailView = () => {
    // const url="https://images.unsplash.com/photo-1543128639-4cb7e6eeef1b?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bGFwdG9wJTIwc2V0dXB8ZW58MHx8MHx8&ixlib=rb-1.2.1&w=1000&q=80";
    const classes=useStyles();
    return (
        <Box className={classes.container}>
            <img src={DetailImg} alt="photo" className={classes.image} />
            <Box className={classes.icons}>
                <Link to='update'><Edit color='primary' className={classes.icon}/></Link>
                <Delete color='error' className={classes.icon}/>
            </Box>
            <Typography className={classes.heading}>title of the blog</Typography>
            <Box className={classes.subheading}> 
                <Typography>Author: <span style={{fontWeight:600}}>Bhavesh Lokre</span></Typography>
                <Typography style={{marginLeft:'auto'}}>13 Aug 2021</Typography>
            </Box>
            <Typography>Line 42:13:  Redundant alt attribute. Screen-readers already announce `img` tags as an image. You don’t need to use the words `image`, `photo,` or `picture` (or any specified custom words) in the alt prop  jsx-a11y/img-redundant-alt
src\components\post\DetailView.js
  Line 40:13:  Redundant alt attribute. Screen-readers already announce `img` tags as an image. You don’t need to use</Typography>
        </Box>

    )
}

export default DetailView
