import './Header.css';
import logo from '../../images/Logo.svg';
import { Link } from 'react-router-dom';
import { AuthContext } from '../Provider/AuthProvider';
import { useContext } from 'react';


const Header = () => {
    const {user, logOut} = useContext(AuthContext)
    console.log(user)
    const handleLogout = () =>{
        logOut()
        .then(result =>{})
        .catch(error=>console.error(error));

    }
    return (
        <nav className='header'>
            <img src={logo} alt="" />
            <div>
            <Link to="/">Shop</Link>
            <Link to="orders">Order</Link>
            <Link to="inventory">Inventory</Link>
            <Link to="login">Login</Link>
            <Link to="/signup">Sign Up</Link>
            {user && <span>Welcome {user.email} <button onClick={handleLogout}>Sing out</button> </span>}
            </div>
        </nav>
    );
};

export default Header;