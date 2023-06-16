import './style.scss'
import { useState } from "react";
import axios from 'axios';
import { useAuthContext } from "../../context/AuthContext";
import { TextField, IconButton, InputAdornment, Button, Alert } from '@mui/material';
import { AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai'

export default function RegisterForm() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [passwordConfirm, setPasswordConfirm] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const [alert, setAlert] = useState({ success: false, msg: '' });
    const { login } = useAuthContext();

    const handleRegister = async (e) => {
        e.preventDefault();
        const user = {
            name: name,
            email: email,
            password: password
        }
        await axios.post('/user/register', user)
            .then(res => {
                if (res.data.status === 200) {
                    const session = {
                        user: res.data.user
                    }
                    login(session);
                } else {
                    setAlert({
                        success: false,
                        msg: res.data.message
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

    const handleNameChange = (event) => {
        setName(event.target.value);
    };

    const handleEmailChange = (event) => {
        setEmail(event.target.value);
    };

    const handlePasswordChange = (event) => {
        setPassword(event.target.value);
    };

    const handlePasswordConfirmChange = (event) => {
        setPasswordConfirm(event.target.value);
    };

    const handleTogglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    const handleTogglePasswordConfirmVisibility = () => {
        setShowPassword(!showPassword);
    };

    return (
        <>
            <Alert
                severity={alert.success ? 'success' : 'error'}
                sx={{ display: alert.msg ? 'flex' : 'none' }}
                className='modalRegisterAlert'
            >
                {alert.msg}
            </Alert>
            <div className="registerFormMainContainer">
                <h1>Registrate</h1>
                <div className="registerFormCardContainer">
                    <form className='formStyle'>
                        <p>Nombre</p>
                        <TextField
                            id="name"
                            placeholder="Jonh Doe"
                            type="text"
                            value={name}
                            onChange={handleNameChange}
                            fullWidth
                        />
                        <p>Correo</p>
                        <TextField
                            id="email"
                            placeholder="jonh@doe.com"
                            type="email"
                            value={email}
                            onChange={handleEmailChange}
                            fullWidth
                        />
                        <p>Contraseña</p>
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
                        <p>Confirmar Contraseña</p>
                        <TextField
                            id="passwordConfirm"
                            placeholder="********"
                            type={showPassword ? 'text' : 'password'}
                            value={passwordConfirm}
                            onChange={handlePasswordConfirmChange}
                            fullWidth
                            InputProps={{
                                endAdornment: (
                                    <InputAdornment position="end">
                                        <IconButton onClick={handleTogglePasswordConfirmVisibility}>
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
                            className='registerButton'
                            type="submit"
                            onClick={handleRegister}
                        >
                            Enviar
                        </Button>

                        <p style={{ marginTop: '1rem' }}>¿Ya tienes cuenta?</p>
                        <Button
                            className='registerButton'
                            href='/'
                        >
                            Inicia Sesión
                        </Button>
                    </form>
                </div>
            </div>
        </>
    )
}