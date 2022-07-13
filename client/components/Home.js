import React from 'react';
import { useSelector } from 'react-redux';
import UploadImage from './UploadImage';

export const Home = () => {
  // const username = useSelector((state) => state.auth.username);

  return (
    <div>
      <UploadImage />
    </div>
  );
};

export default Home;
