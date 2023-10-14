import React from 'react'
import { NavLink, useNavigate } from 'react-router-dom';
import useAppContext from '../AppContext';
const Navbar = () => {

  const {loggedin, logout} = useAppContext();

  
  const showLoginOption = () => {
    if(loggedin){
      return <li className="nav-item">
        <button className='btn btn-danger' onClick={logout}>Logout</button>
      </li>
    }
    
  }

  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-body-secondary navbar-black">
        <div className="container-fluid">
          <NavLink className="navbar-brand" to="Home">
            <b>DealDojo</b>
          </NavLink>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
            text-color='black'
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent" >
            <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <NavLink className="nav-link active" aria-current="page" to="Home">

                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="AddSales">
                  Add Product
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="BrowseSales">
                  Shoping
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="Salemanager">
                  Product List
                </NavLink>
              </li>

              {showLoginOption ()
              
              }
             
            </ul>

          </div>
        </div>
      </nav>


    </div>
  )
}

export default Navbar
