import { useState } from "react";
import { Link } from "react-router-dom";
import { useLogin } from "../hooks/useLogin";


const Login = () => {


    const { login, error, loading } = useLogin();
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();


    const handleSubmit = (e) => {

        e.preventDefault();

        login(email, password);
    }



    return ( 

        <div className="m-4">
        <div className="card col-4 p-3">
            <h2 className="my-2 text-secondary mb-4">LogIn</h2>

        <form onSubmit={handleSubmit} className="d-grid gap-2 ">
            
            <label htmlFor="">Enter your Email <br />
                    <input
                        type="email"
                        value={email}
                        onChange={(e) => { setEmail(e.target.value) }}
                        className="form-control" />
            </label>
                
            <label htmlFor="">Enter your Password <br />
                    <input type="Password"
                        value={password}
                        onChange = {(e)=> { setPassword(e.target.value) } }
                        className="form-control" />
                </label>
                
                    <button className="btn btn-primary" disabled={loading}>Login</button> <br />  

                {error && <div className="card p-3 text-center text-danger" id="box">{ error }</div>  }    
                
                <Link to="/Signup">Don't have an account ?</Link>
        </form>


        </div>   
    </div>

     );
}
 
export default Login;