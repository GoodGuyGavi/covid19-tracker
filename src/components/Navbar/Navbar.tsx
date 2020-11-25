import React from 'react'
import "./Navbar.css"
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

interface INavbarProps{
    pageName: string;
}

const Navbar = (props:INavbarProps) =>{

    const {pageName} = props

    return (
        <div>
            <AppBar position="static" >
                <Toolbar className="navbar">
                    <IconButton >
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6">
                        {pageName}
                    </Typography>
                </Toolbar>
            </AppBar>
        </div>
    )
}

export default Navbar
