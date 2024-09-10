import { useState, useEffect } from "react";

export default function App() {
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    console.log("Rendering...");
    document.title = "React Tutorial" + counter;
  });

  return (
    <div>
      <div>You clicked the button {counter} times</div>
      <button onClick={() => setCounter((count) => count + 1)}>Click me</button>
    </div>
  );
}
