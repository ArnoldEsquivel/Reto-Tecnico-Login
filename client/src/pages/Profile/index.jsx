import { useState, useEffect } from 'react'
import './style.scss'
import axios from 'axios'
import { FaUserAstronaut } from 'react-icons/fa';

export default function MyProfile() {
    const [user, setUser] = useState({});
    const session = JSON.parse(localStorage.getItem("session"))

    useEffect(() => {
        getUser();
    }, []);

    const getUser = async () => {
        await axios.get('/user/my_profile/' + session.user._id)
            .then((res) => {
                console.log(res.data.user)
                setUser(res.data.user)
            })
            .catch((err) => {
                console.log(err)
            })
    }

    return (
        <div className='myProfileMainContainer'>
            <div className='myProfileHeaderContainer'>
                <h1>Bienvenido</h1>
            </div>
            <div className='myProfileUserInfoContainer'>
                <div className='myProfileUserPrincipal'>
                    <FaUserAstronaut className='myProfileUserImage' />
                    <div className='myProfileUserTextContainer'>
                        <h1>
                            {
                            user.name ? user.name : 'Cargando...'
                            }
                        </h1>
                        <div className='myProfileUserExtraInfoContainer'>
                            <p><b>Correo: </b>{user.email}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}