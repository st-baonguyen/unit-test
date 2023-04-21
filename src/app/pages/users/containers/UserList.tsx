import { getUsers } from '@app/stores/users/action';
import React, { useEffect } from 'react';
import { RootStateOrAny, useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const UserList = () => {
  const dispatch = useDispatch();
  const userList = useSelector((state: RootStateOrAny) => state.users);

  console.log('userList', userList);
  useEffect(() => {
    dispatch(getUsers());
  }, []);

  return (
    <section>
      <h1>Fixed Table header</h1>
      <div className="tbl-header">
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Phone</th>
              <th>Address</th>
              <th>Delete</th>
            </tr>
          </thead>
        </table>
      </div>
      <div className="tbl-content">
        <Link to={'/user'}>
          <table>
            <tbody>
              <tr>
                <td>AAC</td>
                <td>AUSTRALIAN COMPANY </td>
                <td>$1.38</td>
                <td>+2.01</td>
                <td>X</td>
              </tr>
            </tbody>
          </table>
        </Link>
      </div>
    </section>
  );
};

export default UserList;
