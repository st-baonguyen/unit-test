import React from 'react';
import { Link } from 'react-router-dom';

const UserList = () => {
  return (
    <div>
      This is user-list page
      <p>
        <Link to="1">See detail</Link>
      </p>
    </div>
  );
};

export default UserList;
