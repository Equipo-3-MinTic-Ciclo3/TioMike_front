import React from 'react'

const Alerta = ({alerta}) => {
  return (
    <div className={`${alerta.error ? "from-red-400 to-red-600" : "from-orange-400 to-orange-600"} bg-gradient-to-br text-center p-2 rounded-xl text-white font-bold text-sm mb-5 uppercase`}>
        {alerta.msg}
    </div>
  )
}

export default Alerta