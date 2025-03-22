import { Link , useNavigate } from "react-router-dom"
import "./login.scss"
import { useContext, useState } from "react";
import { AuthContext } from "../../components/context/authContext";

const Login = () => {

    const [input,setInputs] = useState({
      username:"",
      password:"",
    });
  
    const[err,setErr] = useState(null);

    const navigate  = useNavigate();
  
    const handleChange = e =>{
      setInputs((prev)=>({
        ...prev, [e.target.name]:e.target.value,
      }));
    };

  const {login} = useContext(AuthContext);

  const handleLogin = async(e) =>{
    e.preventDefault();
    try{
    await login(input);
    navigate('/');
    } catch(err){
      setErr(err.response.data)
    }
  };
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
                    <input type="text" placeholder="username"  name="username" onChange={handleChange}/>
                    <input type="password" placeholder="password" name="password" onChange={handleChange} />
                     {err && err}
                    <button onClick={handleLogin}>Login</button>

                </form>
            </div>
        </div>
    </div>
  )
}

export default Login