import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
const Navbar = () => {
  // const [isOpen, setOpen] = useState(false);
  return (
    <div className="navigation">
      <ul>
        <li><Link to="/" className="link">Home</Link></li>
        <li><Link to="/academy" className="link">ONE|Learning Academy</Link></li>
        <li><Link to="/withus" className="link">Partner With Us</Link></li>
        <li><Link to="/community" className="link">Community</Link></li>
        <li><Link to="/dashboard" className="link">Dashboard</Link></li>
      </ul>
    </div>
  );
};

export default Navbar;
