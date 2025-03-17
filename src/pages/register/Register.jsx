import "./register.scss"
import { Link } from "react-router"
const Register = () => {
  return (

    <div className="register">
      <div className="card">
        <div className="left">
          <h1>Register</h1>
          <form action="">
            <input type="text" placeholder="Username" />
            <input type="email" placeholder="email"/>
            <input type="password" placeholder="password" />
            <input type="text" placeholder="Name" />
            <button>Register</button>
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