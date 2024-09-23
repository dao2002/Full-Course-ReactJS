import { useState, useEffect } from "react";
import { LoginForm } from "./components/LoginForm";
import { PostContainer } from "./components/PostContainer";
import { UserContext } from "./utils/contexts/UserContext";

export default function App() {
  return (
    <UserContext.Provider>
      <div>
        <PostContainer />
      </div>
    </UserContext.Provider>
  );
}
