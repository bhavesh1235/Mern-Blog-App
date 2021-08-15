import React from 'react'
import { Box, makeStyles,Typography } from '@material-ui/core'
import bannerImg from '../../images/banner.jpeg'
const useStyles= makeStyles({
    image:{
        background: `url(${bannerImg}) center/55% repeat-x #000`,
        width: '100%',
        height: '50vh',
        display: 'flex',
        flexDirection:'column',
        alignItems:'center',
        justifyContent:'center',
        '& :first-child':{
            fontSize:65,
            color:'white',
            lineHeight:1
        },
        '& :last-child':{
            fontSize:20,
            background:'white'
        }
    }
})
const Banner = () => {
    const classes=useStyles();
    return (
        <Box className={classes.image}>
            <Typography>BLOG APPLICATION</Typography>
            <Typography>A Quote for the Blog</Typography>
        </Box>
    )
}

export default Banner
