import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import Alerta from '../components/Alerta'

const Registrar = () => {
  const [username, setUsername] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [rePassword, setRePassword] = useState("")
  const [nombre, setNombre] = useState("")
  const [rol, setRol] = useState("")

  const [alerta, setAlerta] = useState({})

  const handleSubmit = async e => {
    e.preventDefault();

    if([username, email, password, rePassword].includes("")) {
      setAlerta({msg: "Hay Campos Vacios", error: true})
      return;
    }

    if(password !== rePassword) {
      setAlerta({msg: "Las contraseñas no coinciden", error: true})
      return;
    }

    if(password.length < 6) {
      setAlerta({msg: "Minimo 6 caracteres", error: true})
      return;
    }

    setAlerta({})

    //crear el usuario
    try {
      const url = "http://127.0.0.1:8000/usuario/"
      const respuesta = await axios.post(url, {username, nombre, email, password, rol})
      console.log(respuesta);
    } catch (error) {
      console.log(error);
    }
  }

  const {msg} = alerta

  return (
      <>
        <div>
            <h1 className="text-black font-black text-5xl mt-2">Registrate y Administra tus {" "} <span className="text-orange-600">Pacientes</span> </h1>
        </div>

        <div className="mt-20 md:mt-5 shadow-lg px-5 py-10 rounded-xl bg-[#395D73]">

        {msg && <Alerta alerta={alerta}/>}
        <form onSubmit={handleSubmit}>
        <div className="my-5">
            <label className="uppercase text-white text-xl font-bold block">Username</label>
            <input type="text" placeholder="Ingresa tu Nombre" className="border w-full p-3 mt-3 bg-gray-50 rounded-xl" value={username} onChange={e=> setUsername(e.target.value)}/>
            </div>
        <div className="my-5">
            <label className="uppercase text-white text-xl font-bold block">Nombre</label>
            <input type="text" placeholder="Ingresa tu Nombre" className="border w-full p-3 mt-3 bg-gray-50 rounded-xl" value={nombre} onChange={e=> setNombre(e.target.value)}/>
            </div>

            <div className="my-5">
            <label className="uppercase text-white text-xl font-bold block">Correo</label>
            <input type="email" placeholder="Ingresa tu Correo" className="border w-full p-3 mt-3 bg-gray-50 rounded-xl" value={email} onChange={e=> setEmail(e.target.value)}/>
            </div>

            <div className="my-5">
            <label className="uppercase text-white text-xl font-bold block">Contraseña</label>
            <input type="password" placeholder="Ingresa tu Contraseña" className="border w-full p-3 mt-3 bg-gray-50 rounded-xl" value={password} onChange={e=> setPassword (e.target.value)}/>
            </div>

            <div className="my-5">
            <label className="uppercase text-white text-xl font-bold block"> Repite Contraseña</label>
            <input type="password" placeholder="Confirma tu Contraseña" className="border w-full p-3 mt-3 bg-gray-50 rounded-xl" value={rePassword} onChange={e=> setRePassword(e.target.value)}/>
            </div>

            <div className="my-5">
            <label className="uppercase text-white text-xl font-bold block"> Roles</label>
            <select name="rol" className='w-full mt-3 p-2' onChange={e=> setRol(e.target.value)}>
              <option value="Admin">Admin</option>
              <option value="secre">Secretario</option>
              <option value="vete">Veterinario</option>
            </select>
            </div>

            <input type="submit" value="Crear Cuenta" className="bg-orange-600 w-full py-3 px-10 rounded-xl text-white font-bold mt-5 hover:cursor-pointer hover:bg-orange-700 md:w-auto ml-44" />
        </form>

        <nav className="mt-10 lg:flex lg:justify-between">
            <Link className="block text-center text-orange-500" to="/">¿Ya Tienes una cuenta? Inicia Sesión</Link>
            {rol}
        </nav>
        </div>
      </>
  )
}

export default Registrar