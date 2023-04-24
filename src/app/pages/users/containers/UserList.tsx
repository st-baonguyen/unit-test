import React, { Fragment, useEffect, useState } from 'react';
import { RootStateOrAny, useDispatch, useSelector } from 'react-redux';
import { getUsers } from '@app/stores/users/action';
import UserComponent from './UserComponent';

const UserList = () => {
  const dispatch = useDispatch();
  const userList = useSelector((state: RootStateOrAny) => state.userReducer);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    dispatch(getUsers());
  }, []);

  useEffect(() => {
    if (userList?.data?.length) {
      setLoading(false);
    }
  }, [userList.data]);

  return (
    <>
      {loading ? (
        <p>Loading ...</p>
      ) : (
        <section>
          <h1 data-testid="user-list-title">User List</h1>
          <div className="tbl-header">
            <table>
              <thead>
                <tr data-testid="user-list-row">
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
            {userList?.data?.map((user, index) => (
              <Fragment key={index}>
                <UserComponent user={user} />
              </Fragment>
            ))}
          </div>
        </section>
      )}
    </>
  );
};

export default UserList;
