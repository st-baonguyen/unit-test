import React, { Fragment, useEffect, useState } from 'react';
import { RootStateOrAny, useDispatch, useSelector } from 'react-redux';
import { getUsers } from '@app/stores/users/action';
import UserDetail from './UserDetail';

const UserList = () => {
  const dispatch = useDispatch();
  const userList = useSelector((state: RootStateOrAny) => state.userReducer);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    dispatch(getUsers());
  }, []);

  useEffect(() => {
    console.log('userList', userList.data);
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
          <h1>User List</h1>
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
            {userList?.data?.map((user, index) => (
              <Fragment key={index}>
                <UserDetail user={user} />
              </Fragment>
            ))}
          </div>
        </section>
      )}
    </>
  );
};

export default UserList;
