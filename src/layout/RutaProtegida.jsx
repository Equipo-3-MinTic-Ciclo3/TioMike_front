import React from 'react'
import { Outlet } from 'react-router-dom'

const RutaProtegida = () => {
  return (
    <>
        <h1>Ruta Protegida</h1>
        <Outlet/>
    </>
  )
}

export default RutaProtegida