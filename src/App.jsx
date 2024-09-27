import { useEffect, useState } from "react";
import { PostContainer } from "./components/PostContainer";
import { PostContentButtons } from "./components/PostContentButtons";
import { UserContext } from "./utils/contexts/UserContext";
import { useFecthUser } from "./utils/hooks/useFecthUser";

export default function App() {
  const { user, loading, error } = useFecthUser(2);

  const [userData, setUserData] = useState();

  useEffect(() => {
    if (!loading && !error && user) setUserData(user);
  }, [loading, error, user]);

  return (
    <>
      <UserContext.Provider value={{ ...userData, setUserData }}>
        <div>{loading ? "Loading..." : <PostContainer />}</div>
      </UserContext.Provider>
    </>
  );
}
