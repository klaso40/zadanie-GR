import NavBar from "./components/NavBar";
import ProgressIndicator from "./components/ProgressIndicator";
import bgImage from "./assets/bg-img.png";
import FormComponent from "./components/FormComponent";
import React from "react";
import { setShelters } from "./store/actions";
import store from "./store";
import ApiClient from "./services/ApiClient";

class App extends React.Component {
  componentDidMount() {
    ApiClient.get(
      "https://frontend-assignment-api.goodrequest.com/api/v1/shelters"
    ).then((response) => {
      store.dispatch(setShelters(response.data.shelters));
    });
  }

  render() {
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
}

export default App;
