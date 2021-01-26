import React from "react";
import NavBar from "./components/NavBar";
import ProgressIndicator from "./components/ProgressIndicator";
import SwitchHelp from "./components/SwitchHelpComponent";
import bgImage from "./assets/bg-img.png";
import MyInput from "./components/MyInput";
import Donation from "./components/DonationComponent";

function App() {
  return (
    <div>
      <NavBar />
      <main className="container mx-auto flex">
        <div className="w-2/4">
          <ProgressIndicator />
          <h1 className="text-headlineColor text-5xl font-bold my-7">
            Vyberte si možnosť, ako <br /> chcete pomôcť
          </h1>
          <SwitchHelp />
          <div className="mt-14">
            <div className="flex flex-row justify-between">
              <h3 className="text-headlineColor font-bold">
                Najviac mi záleží na útulku
              </h3>
              <aside className="text-subHeadlineColor font-bold">
                Nepovinné
              </aside>
            </div>
            <MyInput title="Meno" placeholder="Zadajte Vaše meno" />
            <Donation />
          </div>
        </div>
        <div className="w-2/4 flex flex-row justify-center">
          <img src={bgImage} alt="" />
        </div>
      </main>
    </div>
  );
}

export default App;
