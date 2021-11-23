import React, { useContext } from 'react'
import { Button } from 'react-bootstrap';
import { UserContext } from "./UserContext"
const About = () => {

    const { user, setUser } = useContext(UserContext)
    console.log(user);

    return (
        <div>
            <h1>About</h1>
            <pre>
                {
                    JSON.stringify(user.nombre, user.apellido)
                }
            </pre>
            <Button onClick={() => setUser({
                nombre: "Pepito",
                apellido: "Perez"
            })}>Cambiar estado
            </Button>
        </div>
    )
}

export default About