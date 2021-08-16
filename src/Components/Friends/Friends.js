import React from "react";
import './friends.css'

const Friends = ({ friend,handleAdd }) => {
  const { name, email, website, id} = friend;
  return (
    <div className="friends">
      <div className="details">
        <h4>{name}</h4>
        <h5>{email}</h5>
        <h5>{website}</h5>
        
      </div>
      <div className="button">
        <button onClick={() => handleAdd(id)}>Add friend</button>
      </div>
    </div>
  );
};

export default Friends;
