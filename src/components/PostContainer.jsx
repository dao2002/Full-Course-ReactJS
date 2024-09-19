import { useState } from "react";
import PostContent from "./PostContent";

export default function PostContainer() {
  const [data, setdata] = useState("Hello World");
  return (
    <div>
      <PostContent data={data} />
    </div>
  );
}
