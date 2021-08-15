import React from 'react'
import {AppBar , Toolbar , Typography , makeStyles} from '@material-ui/core';
import { Link } from 'react-router-dom';

const useStyles = makeStyles({
    component:{
        background: '#FFFFFF',
        color:'black'
    },
    container:{
        justifyContent:'center',
        // it is used to give css to all its child elements thus helping us to not write again again in child elements
        '& > *':{         
            padding : 20,
            color:"inherit",
            textDecoration:'none'
        }
    }
})

const Header = () => {
    const classes = useStyles();
    return (
        <AppBar className={classes.component}>
            <Toolbar className={classes.container}>
                <Link to="/"><Typography>HOME</Typography></Link>
                <Typography>ABOUT</Typography>
                <Typography>CONTACT</Typography>
                <Typography>LOGIN</Typography>
            </Toolbar>
        </AppBar>
    )
}

export default Header
