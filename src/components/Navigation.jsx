import React from 'react';
import { Link } from 'react-router-dom';

function Navigation(props) {
    return (
        <nav className="navbar navbar-expand-lg sticky-top" data-bs-theme='dark'>
  <div className="container-fluid">
    
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/">Home</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/browse/tv">Tv</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/browse/movie">Movies</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/browsebygenre/movie/28">Genre</Link>
        </li>
       </ul>
      
    </div>
  </div>
</nav>
    );
}

export default Navigation;