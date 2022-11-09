import { useState } from "react";
import { Link } from "react-router-dom";

const Sigup = () => {

    const [userName, setUserName] = useState();
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();


    const handleSubmit = (e) => {

        e.preventDefault();

        console.log(userName, email, password);
    }


    return ( 
        <div className="m-4">
            <div className="card col-4 p-3">
                <h2 className="my-2 text-secondary mb-4">Sign Up</h2>

            <form onSubmit={handleSubmit} className="d-grid gap-2 ">
                
                <label htmlFor="">Enter your UserName <br />
                        <input
                            type="text"
                            value={userName}
                            onChange={(e) => { setUserName(e.target.value) }}
                            className="form-control" />
                </label>


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
                    
                    <button className="btn btn-primary">Sign up</button> <br />   
                    
                    <Link to="/Login">Already have an account ?</Link>
            </form>


            </div>   
        </div>
     );
}
 
export default Sigup;