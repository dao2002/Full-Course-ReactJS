import { useState, useEffect } from "react";

export default function App() {
  const [counter, setCounter] = useState(0);
  const [sync, setSync] = useState(false);

  useEffect(() => {
    console.log("Rendering...");
    document.title = "React Tutorial" + counter;
  }, [sync]);

  return (
    <div>
      <div>You clicked the button {counter} times</div>
      <button onClick={() => setCounter((count) => count + 1)}>Click me</button>
      <button onClick={() => setSync((currentSync) => !currentSync)}>
        Sync
      </button>
    </div>
  );
}
