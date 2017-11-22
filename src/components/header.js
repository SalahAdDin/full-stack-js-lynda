import React from 'react';

const Header = ({ message }) => {
  return(
      <h2 className="ms-textAlignCenter">
        {message}
      </h2>
  );
};

export default Header;
