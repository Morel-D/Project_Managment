import { Link } from "react-router-dom";
import { useLogout } from "../hooks/useLogout";


const Navbar = () => {
    const { logout } = useLogout();

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
            <ul className="navbar-nav">
                {/* <!-- notifications  --> */}
                <li className="nav-item mx-4">
                    <div className="navbar mx-auto">
                        {/* <form action="" className="form">
                            <div className="input-group">
                                <input type="text" className="form-control mx-5" placeholder="Search an article" id="serachInput" />
                              </div>
                        </form> */}
                    </div>
                    </li>
                    <li><button className=" mx-4 btn btn-outline-primary" onClick={handleLogoutClick}>Logout</button></li>
                    <li className="nav-item mx-4 mt-2">Login</li>
                    <li className="nav-item mx-4 mt-2"><Link id="sign" to="/Signup">Sign Up</Link></li>
                {/* <!-- globe  --> */}
               
            </ul>
        </div>
    </nav>

     );
}
 
export default Navbar;