import { useState } from "react";
import { PostContainer } from "./components/PostContainer";
import { PostContentButtons } from "./components/PostContentButtons";
import { UserContext } from "./utils/contexts/UserContext";

export default function App() {
  const [userData, setUserData] = useState({
    id: 1,
    username: "trongdao",
    email: "trongdao2000@gmail.com",
    displayName: "TrongDao",
  });
  return (
    <>
      <UserContext.Provider value={{ ...userData, setUserData }}>
        <div>
          <PostContainer />
        </div>
      </UserContext.Provider>
    </>
  );
}
