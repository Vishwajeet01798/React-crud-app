import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div>
        <nav className="navbar navbar-expand-sm navbar-light bg-light">
  <div className="container-fluid">
    
    <a className="navbar-brand" href="#">MERN</a>
    <Link to="/" className="navbar-brand" >Create Post</Link>
    <Link to="/all" className="navbar-brand" >Read</Link>
    <Link to="/update" className="navbar-brand" >Update</Link>
     
  </div>
</nav>
    </div>
  )
}
export default Navbar;









