import "./App.css";
import { useState } from "react";
import Content from "./Content";
import Create from "./Create";

const App = () => {
  const [postState, setPostState] = useState(false);
  const url = import.meta.env.VITE_SERVER_HOST;

  return (
    <div className="App">
      <Content postState={postState} setPostState={setPostState} url={url} />
      <Create postState={postState} setPostState={setPostState} url={url} />
    </div>
  );
};

export default App;
