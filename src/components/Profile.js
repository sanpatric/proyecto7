import React from 'react'
import '../css/Profile.css';

import AppBar from '@mui/material/AppBar';  //barra de menu de la libreria
import Toolbar from '@mui/material/Toolbar';  //trae las lineas
import Typography from '@mui/material/Typography';
import Avatar from '@mui/material/Avatar';  //obtener imagen de user
import IconButton from '@mui/material/IconButton';  //botenes de iconos
import MenuItem from '@mui/material/MenuItem';  //el menu
import Menu from '@mui/material/Menu';  
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';  //contenido de la tarjeta

function Profile(){
    const [anchorEl, setAnchorEl]= React.useState(null);
    const open = Boolean(anchorEl);
    const username = JSON.parse(localStorage.getItem('username'));
    const avatar = JSON.parse(localStorage.getItem('avatar'));
    const nombre = JSON.parse(localStorage.getItem('nombre'));

    const handleMenu = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () =>{
        setAnchorEl(null);
    };

    //al terminar todo nos envia al registro 
    const handleLogout = ()=>{
        localStorage.removeItem("id");
        localStorage.removeItem("username");
        localStorage.removeItem("nombre");
        localStorage.removeItem("apellido");
        localStorage.removeItem("avatar");

        window.location.href = '/';
    }

    return(
        <div className='root'>
            <AppBar position = 'static'>
                <Toolbar>
                    <Typography variant='h6' className='title'>
                        Perfil: {username}
                    </Typography>
                    <div>
                        <IconButton onClick={handleMenu} color="inherit">                              <Avatar src={avatar}/>
                        </IconButton>
                        <Menu
                            id="menu-appbar"
                            anchorEl={anchorEl}
                            open={open}
                            onClose={handleClose}
                        >
                            <MenuItem onClick={handleLogout}>Logout</MenuItem>
                        </Menu>
                    </div>
                </Toolbar>
            </AppBar>
            <Card className='root' variant='outlined'>
                <CardContent>
                    <Avatar src={avatar} className='large'/>
                    <Typography variant="h5">
                        Bienvenido {nombre}
                    </Typography>
                </CardContent>
            </Card>
        </div>
)



    /* const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const username = JSON.parse(localStorage.getItem('username'));
    const avatar = JSON.parse(localStorage.getItem('avatar'));
    const nombre = JSON.parse(localStorage.getItem('nombre'));

    const handleMenu = (event) => {
        setAnchorEl(event.currentTarget);
    };
    
    const handleClose = () => {
        setAnchorEl(null);
    };

    const handleLogout = () => {
        localStorage.removeItem("id");
        localStorage.removeItem("username");
        localStorage.removeItem("nombre");
        localStorage.removeItem("apellido");
        localStorage.removeItem("avatar");

        window.location.href ="/";

    };
    
    return (
        <div className='root'>
            <AppBar position='static'>
                <Toolbar>
                    <Typography variant="h6" className='title'>
                        Perfil: {username}
                    </Typography>
                    <div>
                        <IconButton onClick={handleMenu} color="inherit">
                            <Avatar src={avatar}/>
                        </IconButton>
                        <Menu 
                            id="menu-appbar"
                            anchorEl={anchorEl}
                            open={open}
                            onClose={handleClose}
                        >
                            <MenuItem onClick={handleLogout}> Logout </MenuItem>
                        </Menu>
                    </div>
                </Toolbar>
            </AppBar>
            <Card className='root' variant='outlined'>
                <CardContent>
                    <Avatar src={avatar} className='large'/>
                    <Typography variant="h5">
                        Bienvenido {nombre}
                    </Typography>
                </CardContent>
            </Card>    
        </div>
     */
}

export default Profile