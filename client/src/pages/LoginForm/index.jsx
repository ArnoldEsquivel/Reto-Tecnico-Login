import './style.scss'
import { useState } from "react";
import axios from 'axios';
import { useAuthContext } from "../../context/AuthContext";
import { TextField, IconButton, InputAdornment, Button, Alert } from '@mui/material';
import { AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai'

export default function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const [alert, setAlert] = useState({success: false, msg: ''});
    const { login } = useAuthContext();

    const handleLogin = async (e) => {
        e.preventDefault();
        await axios.post('/user/login', { email, password })
            .then(res => {
            if (res.data.status === 200) {
                const session = {
                    token: res.data.token,
                    user: res.data.user
                }
                login(session);
            } else {
                setAlert({
                    success: false,
                    msg: 'Correo o contraseña incorrectos'
                })
                setTimeout(() => {
                    setAlert({
                        success: false,
                        msg: ''
                    })
                }, 3000)
            }
        })
    }

    const handleEmailChange = (event) => {
        setEmail(event.target.value);
    };

    const handlePasswordChange = (event) => {
        setPassword(event.target.value);
    };

    const handleTogglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    return (
        <>
            <Alert
                severity={alert.success ? 'success' : 'error'}
                sx={{ display: alert.msg ? 'flex' : 'none' }}
                className='modalLoginAlert'
            >
                {alert.msg}
            </Alert>
            <div className="loginFormMainContainer">
                <h1>Inicia Sesión</h1>
                <div className="loginFormCardContainer">
                    <form className='formStyleLogin'>
                        <p>E-Mail</p>
                        <TextField
                            id="email"
                            placeholder="jonh@doe.com"
                            type="email"
                            value={email}
                            onChange={handleEmailChange}
                            fullWidth
                        />
                        <p>Password</p>
                        <TextField
                            id="password"
                            placeholder="********"
                            type={showPassword ? 'text' : 'password'}
                            value={password}
                            onChange={handlePasswordChange}
                            fullWidth
                            InputProps={{
                                endAdornment: (
                                    <InputAdornment position="end">
                                        <IconButton onClick={handleTogglePasswordVisibility}>
                                            {
                                                showPassword
                                                    ? <AiOutlineEye className='iconPassword' />
                                                    : <AiOutlineEyeInvisible className='iconPassword' />
                                            }
                                        </IconButton>
                                    </InputAdornment>
                                ),
                            }}
                        />
                        <Button
                            className='loginButton'
                            type="submit"
                            onClick={handleLogin}
                        >
                            Submit
                        </Button>

                        <p style={{marginTop: '1rem'}}>¿No tienes una cuenta?</p>
                        <Button
                            className='loginButton'
                            href='/register'
                        >
                            Registrate
                        </Button>
                    </form>
                </div>
            </div>
        </>
    )
}