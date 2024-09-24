import { PostContainer } from "./components/PostContainer";
import { PostContentButtons } from "./components/PostContentButtons";
import { UserContext } from "./utils/contexts/UserContext";

export default function App() {
  return (
    <>
      <UserContext.Provider
        value={{
          id: 1,
          username: "trongdao",
          email: "trongdao2000@gmail.com",
          displayName: "TrongDao",
        }}
      >
        <div>
          <PostContainer />
        </div>
      </UserContext.Provider>
      <PostContentButtons />
    </>
  );
}
