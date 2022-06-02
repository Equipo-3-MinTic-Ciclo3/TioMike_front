 import axios from "axios";
import { useState, useEffect, createContext, Children } from "react";
import { useParams } from "react-router-dom";

 const AuthContext = createContext()

const AuthProvider = ({children}) => {

    const [auth, setAuth] = useState({})

    const params = useParams()

    useEffect(() => {

    console.log(params); 

        const autenticarUsuario = async () => {
            const token = localStorage.getItem("access")

            const config = {
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${token}`
                }
            }

            try {
                url = "http://127.0.0.1:8000/usuario/"
                const {data} = await axios.get()
            } catch (error) {
                
            }

        }
        autenticarUsuario()
    }, [])

    return(
        <AuthContext.Provider value={{
            auth,
            setAuth
        }}>
            {children}
        </AuthContext.Provider>
    )
}

export {
    AuthProvider
}

export default AuthContext;