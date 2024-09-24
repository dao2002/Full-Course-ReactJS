import { useContext, useState } from "react";
import { PostContent } from "./PostContent";
import { UserContext } from "../utils/contexts/UserContext";

export function PostContainer() {
  const [data, setData] = useState("Hello world!");
  const userContextData = useContext(UserContext);

  console.log(userContextData);

  return (
    <div>
      <PostContent data={data} />
      <div>{userContextData.displayName}</div>
    </div>
  );
}
