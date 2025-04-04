import { useState } from "react"
import "./register.scss"
import { Link } from "react-router-dom"
import axios from "axios";

const Register = () => {


  const [input,setInputs] = useState({
    username:"",
    email:"",
    password:"",
    name:"",
  });

  const[err,setErr] = useState(null);

  const handleChange = e =>{
    setInputs((prev)=>({
      ...prev, [e.target.name]:e.target.value
    }));
  };
  
const handleClick =  async e=>{
  e.preventDefault()

  try{
    await axios.post("http://localhost:8800/api/auth/register",input)
  }catch(err){
    setErr(err.response.data);
  }
};

  return (

    <div className="register">
      <div className="card">
        <div className="left">
          <h1>Register</h1>
          <form>
            <input type="text" placeholder="Username" name="username" onChange={handleChange} />
            <input type="email" placeholder="email"  name="email" onChange={handleChange} />
            <input type="password" placeholder="password"   name="password" onChange={handleChange} />
            <input type="text" placeholder="Name"  name="name" onChange={handleChange} />
            {err && err}
            <button onClick={handleClick}>Register</button>
          </form>
        </div>
        <div className="right">
          <h1>Deve Social</h1>
          <p>Hello this is the sample of social application</p>
          <span>Do you have an account</span>
          <Link to="/login">
            <button>Login</button>
          </Link>
        
        </div>
      </div>
    </div>
  )
}

export default Register