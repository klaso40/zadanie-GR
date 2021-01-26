import React from "react";
import NavBar from "./components/NavBar";
import ProgressIndicator from "./components/ProgressIndicator";
import bgImage from "./assets/bg-img.png";
import FormComponent from "./components/FormComponent";

function App() {
  return (
    <div>
      <NavBar />
      <main className="container mx-auto flex">
        <div className="w-2/4">
          <ProgressIndicator />
          <FormComponent />
        </div>
        <div className="w-2/4 flex flex-row justify-center">
          <img src={bgImage} alt="" />
        </div>
      </main>
    </div>
  );
}

export default App;
