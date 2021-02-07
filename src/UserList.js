import React, { useEffect, useContext, useCallback } from 'react';
import { UserDispatch } from "./App";

const User = React.memo(function({ user }) {
  useEffect(() => {
    console.log('User');
  });

  const dispatch = useContext(UserDispatch);

  const onToggle = useCallback(id => {
    dispatch({
      type: 'TOGGLE_USER',
      id
    });
  }, [dispatch]);

  const onRemove = useCallback(id => {
    dispatch({
      type: 'REMOVE_USER',
      id
    });
  }, [dispatch]);

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

function UserList({ users }) {
  useEffect(() => {
    console.log('UserList');
  });
  return (
    <div>
      {users.map(user => (
        <User user={user} key={user.id} />
      ))}
    </div>
  )
}

export default React.memo(UserList);