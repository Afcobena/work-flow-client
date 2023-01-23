import axios from "axios";

const service = axios.create({
    baseURL: "http://localhost:5005/api"
})

//* Servicio POST para crear el usuario.
const signupService = (newUser) => {
    return service.post("/auth/signup", newUser)
}

//* Servicio POST para mandar los datos del usuario y validarlos.
const loginService = (user) => {
    return service.post("/auth/login", user)
}

//* Servicio GET para enviar el Token.
const verifyService = () => {
    return service.get("/auth/verify")
}


export {
    signupService,
    loginService,
    verifyService
}