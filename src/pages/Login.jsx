import axios from 'axios'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Alerta from '../components/Alerta'
import useAuth from '../hooks/useAuth'

const Login = () => {

  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  const [alerta, setAlerta] = useState("")

  const handleSubmit = async (e) => {
    e.preventDefault();

    if([username, password].includes("")) {
      setAlerta({msg: "Hay Campos Vacios", error: true})
      return;
    }

    try {
      const url = "http://127.0.0.1:8000/login/"
      const {data} = await axios.post(url, {username, password})
      localStorage.setItem("access", data.access)
      localStorage.setItem("refresh", data.refresh)
    } catch (error) {
      console.log(error);
    }
  }

  const {msg} = alerta

  return (
    <>
        <div>
            <h1 className="text-black font-black text-5xl mt-40 ml-10">Veterinaria <br></br> Tio {" "} <span className="text-orange-600">Mike</span> </h1>
        </div>

        <div className="mt-20 md:mt-30 shadow-lg px-5 py-10 rounded-xl bg-[#395D73]">
        {msg && <Alerta alerta={alerta}/>}
            <form onSubmit={handleSubmit}>
              <div className="my-5">
                <label className="uppercase text-white text-xl font-bold block">Username</label>
                <input type="text" placeholder="Ingresa tu Correo" className="border w-full p-3 mt-3 bg-gray-50 rounded-xl" value={username} onChange={e=> setUsername(e.target.value)}/>
              </div>
              <div className="my-5">
                <label className="uppercase text-white text-xl font-bold block">Contraseña</label>
                <input type="password" placeholder="Ingresa tu Contraseña" className="border w-full p-3 mt-3 bg-gray-50 rounded-xl" value={password} onChange={e=> setPassword(e.target.value)}/>
              </div>

              <input type="submit" value="Iniciar Sesión" className="bg-orange-600 w-full py-3 px-10 rounded-xl text-white font-bold mt-5 hover:cursor-pointer hover:bg-orange-700 md:w-auto ml-44" />

            </form>

            <nav className="mt-10 lg:flex lg:justify-between">
              <Link className="block text-center text-orange-500" to="/registrar">¿No Estas Registrado? Registrate Aqui</Link>
            </nav>
          </div>
    </>
  )
}

export default Login