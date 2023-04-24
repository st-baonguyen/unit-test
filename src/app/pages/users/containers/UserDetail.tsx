import { ApiService } from '@app/core/services/api.service';
import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';

const api = new ApiService();

const UserDetail = () => {
  const { id } = useParams();
  const [user, setUser] = useState(null);

  const [loadingUserDetail, setLoadingUserDetail] = useState(false);

  useEffect(() => {
    if (id) {
      setLoadingUserDetail(true);
      api
        .get([`/users/${id}`])
        .then((res) => {
          setUser(res);
        })
        .catch((error) => {
          return error;
        })
        .finally(() => setLoadingUserDetail(false));
    }
  }, [id]);

  return (
    <div>
      {loadingUserDetail ? (
        <p>Loading...</p>
      ) : (
        <>
          <div data-testid="user-name-detail">
            <span>User name</span>
            <span>{user?.name}</span>
          </div>
          <div data-testid="user-email-detail">
            <span>Email</span>
            {user?.email}
          </div>
          <div data-testid="user-phone-detail">
            <span>Phone number</span>
            <span>{user?.phone}</span>
          </div>
          <div data-testid="user-address-detail">
            <span>Address</span>
            <span>{user?.address.city}</span>
          </div>
        </>
      )}
    </div>
  );
};

export default UserDetail;
