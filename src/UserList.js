import React, { useEffect } from 'react';

const User = React.memo(function({ user, onRemove, onToggle }) {
  useEffect(() => {
    console.log('User');
  });
  return (
    <div>
      <b
        style={{
          cursor: 'pointer',
          color: user.active ? 'green' : 'black'
        }}
        onClick={() => onToggle(user.id)}
      >{user.username}
      </b>
      <span> ({user.email})</span>
      <button onClick={() => onRemove(user.id)}>삭제</button>
    </div>
  );
});

function UserList({ users, onRemove, onToggle }) {
  useEffect(() => {
    console.log('UserList');
  });
  return (
    <div>
      {users.map(user => (
        <User user={user} key={user.id} onRemove={onRemove} onToggle={onToggle} />
      ))}
    </div>
  )
}

export default React.memo(UserList);