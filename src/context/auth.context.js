/* import {createContext, useEffect, useState} from "react";
import {verifyService} from "../services/auth.services"


const AuthContext = createContext()

function AuthWrapper(props) {

    // todos los estados del usuario activo
    // ! si es admin iria aquí
    const [isUserActive, setIsUserActive] = useState(false)
    const [isUserAdmin, setIsUserAdmin] = useState(false)
    const [user, setUser] = useState(null)
    const [isFetching, setIsFetching] = useState(true)

    useEffect(() => {
        authenticatedUser()
    }, [])

    // ! funcion para verificar si el Token del usuario es valido
    const authenticatedUser = async () => {


        try {
            const response = await verifyService()
            console.log(response.data)

            setIsUserActive(true)
            setIsUserAdmin(true)
            setUser(response.data) // le damos el payload
            setIsFetching(false)

        } catch (error) {
            console.log(error)
            setIsUserActive(false)
            setIsUserAdmin(false)
            setUser(null) // el usuario no se logro logear  
            setIsFetching(false)
        }
    }

    const passedContext = {
        isUserActive,
        isUserAdmin,
        user,
        authenticatedUser
    }


    if (isFetching === true) {
        return <h3>...Is Validating User...</h3>
    }

    return (
        <AuthContext.Provider value={passedContext}>
            {props.children}
        </AuthContext.Provider>
    )
}

export {
    AuthContext,
    AuthWrapper
} */