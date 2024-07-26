import React from 'react';

const UserInfo = ({ user }) => {
  if (!user) return null;

  const { name, picture, gender, email } = user;

  return (
    <div className="user-info">
      <img src={picture.large} alt={`${name.first} ${name.last}`} />
      <h2>{`${name.title} ${name.first} ${name.last}`}</h2>
      <p><strong>Gender:</strong> {gender}</p>
      <p><strong>Email:</strong> {email}</p>
    </div>
  );
};

export default UserInfo;