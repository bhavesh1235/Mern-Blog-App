import React from 'react'
import {AppBar , Toolbar , Typography , makeStyles} from '@material-ui/core';
import { Link , useHistory} from 'react-router-dom';
import { useOktaAuth } from '@okta/okta-react';

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
    const history = useHistory();

    const { oktaAuth, authState } = useOktaAuth();

    if (!authState) return null;

    const login = async () => history.push('/login');
  
    const logout = async () => oktaAuth.signOut();


    const button = authState.isAuthenticated ? 
    <button onClick={logout}
        style={{
            background: 'unset',
            border:'none',
            textTransform:'uppercase',
            fontFamily:'Roboto',
            fontSize:17,
            cursor:'pointer',
            opacity:0.9
        }}
    
    >Logout</button> :
    <button onClick={login}>Login</button>;


    return (
        <AppBar className={classes.component}>
            <Toolbar className={classes.container}>
                <Link to="/"><Typography>HOME</Typography></Link>
                <Typography>ABOUT</Typography>
                <Typography>CONTACT</Typography>
                <Typography>{button}</Typography>
            </Toolbar>
        </AppBar>
    )
}

export default Header
