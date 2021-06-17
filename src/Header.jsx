import { Typography, Toolbar } from '@material-ui/core';
import { makeStyles } from '@material-ui/core';
import React from 'react'
import AppBar from '@material-ui/core/AppBar'
import MenuRoundedIcon from '@material-ui/icons/MenuRounded';
const useStyles = makeStyles({
    title: {
        display: 'flex',
        justifyContent: 'center',
        textAlign: 'center',
        width: '100%', flexGrow: 1
    },

});


const Header = () => {


    const classes = useStyles();


    return (
        <AppBar color='secondary' position='static' className='title'> <Toolbar>
            <MenuRoundedIcon style={{ marginRight: '20px' }} />
               List
        </Toolbar></AppBar >
    )
}

export default Header
