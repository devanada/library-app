import { useState } from "react";
import reactLogo from "../assets/react.svg";

import { Button } from "@/components/ui/button";
import Layout from "@/components/layout";

function App() {
  const [count, setCount] = useState(0);
  const [data, setData] = useState<string[]>([]);
  // const [state, updater] = useState(defaultValue)

  const handleClick = () => {
    setCount(count + 1);
    // setCount((prevState) => prevState + 1);
  };

  function handleClick2() {
    setCount(count + 1);
    // setCount((prevState) => prevState + 1);
  }

  return (
    <Layout>
      <div className="flex">
        <a href="https://vitejs.dev" target="_blank">
          <img src="/vite.svg" className="h-[6em] p-[1.5em]" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img
            src={reactLogo}
            className="h-[6em] p-[1.5em] animate-spin"
            alt="React logo"
          />
        </a>
      </div>
      <h1 className="text-red-500">Vite + React</h1>
      <div className="card">
        {/* <Button onClick={() => handleClick()}>count is {count}</Button> */}
        <Button onClick={handleClick2}>count is {count}</Button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </Layout>
  );
}

export default App;
