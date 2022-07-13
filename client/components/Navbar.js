import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { logout } from '../store';

const Navbar = () => {
  const dispatch = useDispatch();
  const isLoggedIn = useSelector((state) => !!state.auth.id);

  return (
    <div>
      <nav>
        {/* {isLoggedIn ? (
          <div>
            {/* The navbar will show these links after you log in */}
        {/* <Link to="/home">Home</Link>
            <a href="#" onClick={() => dispatch(logout())}>
              Logout
            </a>
          </div>
        ) : (
          <div>
            {/* The navbar will show these links before you log in */}
        {/* <Link to="/login">Login</Link>
            <Link to="/signup">Sign Up</Link>
          </div>
        )} */}
      </nav>
      <hr />
    </div>
  );
};

export default Navbar;
