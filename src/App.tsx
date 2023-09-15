import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

import { Button } from "./components";

function App() {
  return (
    <div className="p-12">
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <div className="border-solid border border-border-weak p-6 rounded-xl flex flex-col gap-4 items-start">
        <h1 className="text-3xl text-text-default font-bold">Hello world!</h1>
        <div>
          <p className="text-text-default">
            Edit <code>src/App.tsx</code> and save to test HMR
          </p>
        </div>
        <p className="text-text-default">
          Click on the Vite and React logos to learn more
        </p>
        <Button label="Click me" onClick={() => console.log("clicked")} />
      </div>
    </div>
  );
}

export default App;
