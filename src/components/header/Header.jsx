import './Header.css';
import Navbar from '../navbar/Navbar'
const Header = () =>{
  return(
    <div className='main-container'>
    <header className='main-header'>
      <p className='logo'>One-Learning</p>
        <Navbar className='navbar' />
    </header>
 </div>
  )
}
export default Header;