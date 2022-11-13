import { Link } from "react-router-dom";
import { useAuthContext } from "../hooks/useAuthContext";
import { useLogout } from "../hooks/useLogout";


const Navbar = () => {
    const { logout } = useLogout();

    const { user } = useAuthContext() 

    const handleLogoutClick = () => {

       logout()
    }


    return ( 

        <nav className="navbar p-2 shadow-sm bg-body navbar-expand-lg">
            <Link to="/" className="navbar-brand">
                <h2 className="mx-4 text-primary">RRS</h2> <small className="mx-4">Record Managment System</small>
            </Link>

        {/* <!-- option  --> */}
            <div className="conatiner ms-auto p-3">
            
                {user && (
                    <ul className="navbar-nav">
                        <li> {user.email}  <button className=" mx-4 btn btn-outline-primary" onClick={handleLogoutClick}>Logout</button></li>
                    </ul>
                )}
                    

                {!user && (
                     <ul className="navbar-nav">
                     <li className="nav-item mx-4 mt-2"><Link id="sign" to="/Login">Login</Link></li>
                     <li className="nav-item mx-4 mt-2"><Link id="sign" to="/Signup">Sign Up</Link></li>
             </ul>
               )}
                
        </div>
    </nav>

     );
}
 
export default Navbar;