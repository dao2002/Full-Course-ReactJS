import { useState } from "react";
import { LoginForm } from "./components/LoginForm.jsx";
import { RegisterForm } from "./components/RegisterForm.jsx";
import { UserDetails } from "./components/UserDetails.jsx";

export default function App() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [counter, setCounter] = useState(3);
  const [users, setUsers] = useState([
    {
      id: 1,
      username: "john",
      email: "john@gmail.com",
    },
    {
      id: 2,
      username: "mike",
      email: "mike@gmail.com",
    },
  ]);
  console.log(users);
  return (
    <div>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          const newUser = {
            id: counter,
            username,
            email,
          };
          setCounter((currentCounter) => currentCounter + 1);
          setUsers((currentUserState) => [newUser, ...currentUserState]);
        }}
      >
        <div>
          <label htmlFor="username">Username</label>
          <input
            name="username"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="email">Email</label>
          <input
            name="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <button>Add user</button>
      </form>
      {users.map((user, index) => (
        <UserDetails key={index} user={user} setUsers={setUsers} />
      ))}
    </div>
  );
}
