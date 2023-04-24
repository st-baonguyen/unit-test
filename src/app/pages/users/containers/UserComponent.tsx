import { ApiService } from '@app/core/services/api.service';
import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';

const api = new ApiService();

const UserComponent = (props) => {
  const { id, name, email, phone, address } = props.user;
  return (
    <Link to={`/users/${id}`}>
      <table>
        <tbody>
          <tr data-testid="user-row">
            <td>{name}</td>
            <td>{email}</td>
            <td>{phone}</td>
            <td>{address.city}</td>
            <td>X</td>
          </tr>
        </tbody>
      </table>
    </Link>
  );
};

export default UserComponent;
