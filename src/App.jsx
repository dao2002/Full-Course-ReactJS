import { useState, useEffect } from "react";

export default function App() {
  const [counter, setCounter] = useState(0);
  const [sync, setSync] = useState(false);

  useEffect(() => {
    console.log("Rendering...");
    document.title = "React Tutorial" + counter;
  }, [sync]);

  useEffect(() => {
    const controller = new AbortController();
    async function fetchUsers() {
      try {
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/users",
          { signal: controller.signal }
        );
        const json = await response.json();
        console.log(json);
        console.log(controller.signal);
      } catch (error) {
        console.log(error);
      }
    }
    fetchUsers();
    return () => {
      controller.abort();
      console.log(controller.signal);
    };
  });

  const [show, setShow] = useState(false);
  useEffect(() => {
    let timer = setTimeout(() => setShow(true), 3000);
    return () => {
      clearTimeout(timer);
    };
  }, []);

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
