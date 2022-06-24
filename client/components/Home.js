/* eslint-disable no-unused-vars */

import React from "react";
import { useSelector } from "react-redux";

export const Home = () => {
  const username = useSelector((state) => state.auth.username);

  return (
    <div>
      <h3>Welcome, {username}</h3>
    </div>
  );
};

export default Home;
