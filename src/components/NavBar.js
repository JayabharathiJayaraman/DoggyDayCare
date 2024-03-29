import './navbar.css';
import React , {useState} from 'react';
import { Link } from 'react-router-dom';

function NavBar(){
    const [click, setClick] = useState(false);
  
    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);

    return(
        <>
        <nav className = "navbar">
            <div className= "navbar-container">
            <Link to = "/" className = "navbarLogo" onClick = {closeMobileMenu}>
                Doggy DayCare <i className="fas fa-paw"></i>
            </Link>
            <div className='menu-icon' onClick={handleClick}>
            <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
          </div>
          <ul className={click ? 'nav-menu active' : 'nav-menu'}>
            <li className='nav-item'>
              <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                Home
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                to='/aboutus'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                AboutUs
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                to='/photos'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                Gallery
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                to='/contact'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                Contact
              </Link>
            </li>
            </ul>
            </div>
        </nav>
        </>
    );
}

export default NavBar;
