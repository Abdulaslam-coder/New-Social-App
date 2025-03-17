import { Link } from "react-router"
import "./login.scss"
import { useContext } from "react";
import { AuthContext } from "../../components/context/authContext";

const Login = () => {
  const {login} = useContext(AuthContext);
  const handleLogin = () =>{
    login();
  }
  return (
    <div className="login">
        <div className="card">
            <div className="left">
                <h1>Hello World.</h1>
                <p>Sample text</p>
                <span>Don't you have the account ?</span>
                
                <Link to="/register">
                  <button>Register</button>
                </Link>
               
            </div>
            <div className="right">
                <h1>Login</h1>
                <form action="">
                    <input type="text" placeholder="username" />
                    <input type="password" placeholder="password"/>
                    <button onClick={handleLogin}>Login</button>

                </form>
            </div>
        </div>
    </div>
  )
}

export default Login