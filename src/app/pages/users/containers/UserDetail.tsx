import React from 'react';
import { Link } from 'react-router-dom';

type USER = {
  id: number;
  name: string;
  email: string;
  phone: string;
  address: any;
};

const UserDetail = (props) => {
  const { id, name, email, phone, address }: USER = props.user;
  return (
    <Link to={`/user/${id}`}>
      <table>
        <tbody>
          <tr>
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

export default UserDetail;
