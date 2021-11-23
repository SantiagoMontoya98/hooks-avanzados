
import React, { useContext, useState } from 'react'
import { Button } from 'react-bootstrap'
import { FloatingLabel, Form } from 'react-bootstrap'
import { UserContext } from './UserContext'

const Login = () => {

    const [form, setForm] = useState({
        nombre: "",
        apellido: ""
    })

    const handleChange = ({target}) => {

      setForm({
        ...form,
        [target.name]: target.value
      })      

    }

    const { user, setUser } = useContext(UserContext)

    const logueo = () => {
        setUser(form)
        localStorage.setItem('logueado', true)
    }

    const logout = () => {
        setUser({
            nombre: '',
            apellido: ''
        })
        localStorage.setItem('logueado', false)
    }

    return (
        <div>

          <h1>Login</h1>
          
            <FloatingLabel
              controlId="floatingInput"
              label="Nombre"
              className="mb-3">

              <Form.Control 
                type="text"
                name="nombre"
                placeholder="Nombre"
                onChange={handleChange}/>

            </FloatingLabel>

            <FloatingLabel 
              controlId="floatingInput" 
              label="Apellido" 
              className="mb-3">

              <Form.Control 
                type="text"
                name="apellido"
                placeholder="Apellido"
                onChange={handleChange}/>

            </FloatingLabel>
            
            <Button onClick={logueo}>
                Login
            </Button>
            <Button onClick={logout}>
                Logout
            </Button>

        </div>
    )
}

export default Login
