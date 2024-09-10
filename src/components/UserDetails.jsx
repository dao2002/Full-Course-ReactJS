import PropTypes from "prop-types";
import { useState } from "react";

export function UserDetails({ user, setUsers }) {
  const [isEditing, setEditing] = useState(false);
  const [username, setUsername] = useState(user.username);
  const [email, setEmail] = useState(user.email);

  return (
    <div>
      <div>
        <button
          onClick={() => {
            setEditing((currentState) => !currentState);
          }}
        >
          Edit
        </button>
        <button
          onClick={() => {
            setUsers((currentUsersState) =>
              currentUsersState.filter(
                (currentUser) => currentUser.id !== user.id
              )
            );
          }}
        >
          Delete
        </button>
        {isEditing && (
          <button
            onClick={() => {
              setUsers((currentUsersState) =>
                currentUsersState.map((currentUser) =>
                  currentUser.id === user.id
                    ? { ...currentUser, username, email }
                    : currentUser
                )
              );
              setEditing(false);
            }}
          >
            Save
          </button>
        )}
      </div>
      <div>
        <b>ID:</b>
        <span>{user.id}</span>
        <br />
        <b>Username:</b>
        {isEditing ? (
          <input
            name="username"
            id="username"
            value={username}
            onChange={(e) => {
              setUsername(e.target.value);
            }}
          />
        ) : (
          <span>{user.username}</span>
        )}
        <br />
        <b>Email:</b>
        {isEditing ? (
          <input
            name="email"
            id="email"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
        ) : (
          <span>{user.email}</span>
        )}
      </div>
    </div>
  );
}

UserDetails.propTypes = {
  user: PropTypes.shape({
    id: PropTypes.number.isRequired,
    username: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
  }).isRequired,
  setUsers: PropTypes.func.isRequired,
};
