import React from "react";
import Chat from "./chat";
import "./App.css";
import Navbar from "./navbar";
import ChatInput from "./ChatInput";

const App = () => {
  return (
    <div>
      <Navbar />
      <Chat />
      <ChatInput />
    </div>
  );
};
 export default App;

