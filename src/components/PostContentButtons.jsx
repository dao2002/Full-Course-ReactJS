import { useContext } from "react";
import { UserContext } from "../utils/contexts/UserContext";

export function PostContentButtons() {
  const userContextData = useContext(UserContext);
  return (
    <div>
      {userContextData.id}
      <br />
      <button
        onClick={() => {
          userContextData.setUserData;
        }}
      >
        Click me
      </button>
    </div>
  );
}
