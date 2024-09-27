import { useEffect, useState } from "react";
import { PostContainer } from "./components/PostContainer";
import { PostContentButtons } from "./components/PostContentButtons";
import { UserContext } from "./utils/contexts/UserContext";
import { useFecthUser } from "./utils/hooks/useFecthUser";
import { Link, Outlet } from "react-router-dom";

export default function App() {
  const { user, loading, error } = useFecthUser(2);

  const [userData, setUserData] = useState();

  useEffect(() => {
    if (!loading && !error && user) setUserData(user);
  }, [loading, error, user]);

  return (
    <>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
        </ul>
        <ul>
          <li>
            <Link to="/users">User</Link>
          </li>
        </ul>
        <ul>
          <li>
            <Link to="/blog-posts">Blogs</Link>
          </li>
        </ul>
      </nav>
      {/* <UserContext.Provider value={{ ...userData, setUserData }}>
        <div>{loading ? "Loading..." : <PostContainer />}</div>
      </UserContext.Provider> */}
      <Outlet />
    </>
  );
}
