import './navbar.css';
import {Link} from 'react-router-dom';

function Navbar() {
  return (
    <header>
        <nav>
        <div> <Link to='/'>OIC Hub</Link>  </div>
            <ul>
                <li><Link to='/'>Home</Link></li>
                <li><Link to='/about'>About</Link></li>
                <li><Link to='/services'>Services</Link></li>
                <li><Link to='/contact'>Contact</Link></li>
            </ul>
        </nav>
    </header>
  )
}

export default Navbar