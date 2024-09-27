import { useContext, useState } from "react";
import { PostContent } from "./PostContent";
import { UserContext } from "../utils/contexts/UserContext";

export function PostContainer() {
  const [data, setData] = useState("Hello world!");
  const userContextData = useContext(UserContext);

  return (
    <div>
      <div>
        <span>PostContainer</span>
      </div>
      <div>{userContextData.name}</div>
      <div>{userContextData.id}</div>
      <div>{userContextData.email}</div>
      <div>{userContextData.username}</div>
      <PostContent data={data} />
    </div>
  );
}
