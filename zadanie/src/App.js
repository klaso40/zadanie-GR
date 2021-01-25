import React from "react";
import NavBar from "./components/NavBar";
import ProgressIndicator from "./components/ProgressIndicator";

function App() {
  return (
    <div>
      <NavBar />
      <div className="container mx-auto">
        <ProgressIndicator />
      </div>
    </div>
  );
}

export default App;
