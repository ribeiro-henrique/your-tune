import { useState, useContext } from 'react';
import { MyContext } from '../context/Context';
import { Link } from "react-router-dom";
import '../styles/NavBar.css';

export default function NavBar() {
  const myContext = useContext(MyContext);
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <div className="navbar">
      <p>Welcome back, {myContext.user}!</p>
      <div className="menu-icon" onClick={toggleMenu}>
        <div className='hamburger'>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
      {showMenu && (
        <div className="navbar-links">
          <Link to={'/favorites'} onClick={toggleMenu}>
            Favorites
          </Link>
          <Link to={'/profile'} onClick={toggleMenu}>
            Profile
          </Link>
          <Link to={'/'} onClick={toggleMenu}>
            Logout
          </Link>
        </div>
      )}
    </div>
  );
}
