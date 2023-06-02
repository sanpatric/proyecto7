import React, { useState } from 'react';
import swal from 'sweetalert';
import '../css/Signin.css';
//importar los elementos q se va utilizar
import Avatar from '@mui/material/Avatar';  //crea element xra perfiles
import Button from '@mui/material/Button';  //
import TextField from '@mui/material/TextField';  //
import Grid from '@mui/material/Grid';  // grillas orejillas
import Paper from '@mui/material/Paper';  // efecto traslucido
import Typography from '@mui/material/Typography';  //
import CssBaseline from '@mui/material/CssBaseline';  //
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';  //bordeado de lineas de notas


//consumimos una fetch API
async function login(credenciales){
    return fetch('https://646e5db89c677e23218b94aa.mockapi.io/api/v1/Usuarios',{
        method: 'POST',
        headers: {
            'Content-Type':'application/json'
        },
        body: JSON.stringify(credenciales)

    })
    .then(data => data.json())  //data devuelve una informacion
}

function Signin() {
    const [username, setUsername] = useState();
    const [password, setPassword] = useState();

    const submit = async e => {  
        e.preventDefault();
        const response = await login({  //se logea
            username,
            password
        });
        if(response.id!==0){  //si la rta es correct nos da un valor especifico
            swal("Success", response.username, "success", {
                buttons: false,
                timer: 2000,
            })
            .then((value) => {
                    //se guarda la informacion de manera local
                localStorage.setItem('id', response['id']);
                localStorage.setItem("username", JSON.stringify(response['username']));
                localStorage.setItem("nombre", JSON.stringify(response['nombre']));
                localStorage.setItem("apellido", JSON.stringify(response['apellido']));
                localStorage.setItem("avatar", JSON.stringify(response['avatar']));
                
                window.location.href= "/profile";  //si la inf es correc hace un renderiza a un profile
            });
        }else{
            swal("Failed", response.username, "error"); //en caso de q no sea correc envia un mensaje
        }
    }
    //carga las img y formulario de autenticacion
    return (
        <Grid container className='root'>
            <CssBaseline />
            <Grid item xs={false} md={7} className='image'/>   
            <Grid item xs={12} md={5} component={Paper} elevation={6} square>
                <div className='paper'>
                    <Avatar className='Avatar'>
                        <LockOutlinedIcon/>
                    </Avatar>
                    <Typography component="h1" variant="h5">
                        Inicio de Sesion
                    </Typography>

                    <form className='form' noValidate onSubmit={submit}>
                    <TextField
                        variant="outlined"
                        margin="normal"
                        required
                        fullWidth
                        id="email"
                        name="email"
                        label="Email"
                        onChange={e => setUsername(e.target.value)}
                    />
                    <TextField
                        variant="outlined"
                        margin="normal"
                        required
                        fullWidth
                        type="password"
                        id="password"
                        name="password"
                        label="Contrasena"
                        onChange={e => setPassword(e.target.value)}
                    />
                    <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        color="primary"
                        className='submit'
                    >
                        Registrarse
                    </Button>
                </form>
            </div>
        </Grid>            
    </Grid>
    );
}


export default Signin;