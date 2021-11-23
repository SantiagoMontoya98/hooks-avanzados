import React,{useContext} from 'react'
import { UserContext } from './UserContext';

const Home = () => {


    const {user} = useContext(UserContext);

    if (JSON.parse(localStorage.getItem('logueado'))) {
        return (
            <h1>Hola {user.nombre}</h1>
        )
    } else {
        return (
            <h1>Usted no está logueado</h1>
        )
    }
}

export default Home
