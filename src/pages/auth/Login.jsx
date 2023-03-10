import { useState/* , useContext  */} from "react";
import { useNavigate } from "react-router-dom";
import { loginService } from "../../services/auth.services";

/* import { AuthContext } from "../../context/auth.context"; */

function Login() {

  /* const { authenticatedUser } = useContext(AuthContext) */

  const navigate = useNavigate()

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("")

  const handleEmailChange = (event) => setEmail(event.target.value);
  const handlePasswordChange = (event) => setPassword(event.target.value);

  const handleLogin = async (event) => {
    event.preventDefault();
    // ... login logic here
    const user = {
      email: email,
      password: password
    }

    try {
      
      const response = await loginService(user)
      console.log(response.data)
      // eventualmente recibiremos el token y ... ya veremos

      const authToken = response.data.authToken

      localStorage.setItem("authToken", authToken)

      /* authenticatedUser() */

      navigate("/todos")

      // ! aqui vamos a hacer una redirección a alguna pagina privada

    } catch (error) {
      if (error.response.status === 400) {
        setErrorMessage(error.response.data.errorMessage)
      } else {
        navigate("/error")
      }
    }

  };

  return (
    <div>

      <h1>Log In</h1>

      <form onSubmit={handleLogin}>
        <label>Email:</label>
        <input
          type="email"
          name="email"
          value={email}
          onChange={handleEmailChange}
        />
        <br />
        <label>Password:</label>
        <input
          type="password"
          name="password"
          value={password}
          onChange={handlePasswordChange}
        />
        <br />
        {errorMessage ? <p>{errorMessage}</p> : null}
        <br />
        <button type="submit">Login</button>
      </form>
      
    </div>
  );
}

export default Login;