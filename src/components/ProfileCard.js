import React from 'react';

function ProfileCard({ name, photo }) {
  return (
    <div className="profile-card">
      <img src={photo} alt="profile" />
      <h2>{name}</h2>
    </div>
  );
}

export default ProfileCard;