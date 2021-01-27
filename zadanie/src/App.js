import NavBar from "./components/NavBar";
import ProgressIndicator from "./components/ProgressIndicator";
import bgImage from "./assets/bg-img.png";
import FormComponent from "./components/FormComponent";
import React from "react";
import { setShelters } from "./store/actions";
import store from "./store";
import ApiClient from "./services/ApiClient";
import MyFooter from "./components/MyFooter";

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
        <main className="container h-screen mx-auto flex">
          <div className="w-1/2">
            <ProgressIndicator />
            <FormComponent />
          </div>
          <div className="w-1/2 flex flex-row justify-center items-center">
            <img src={bgImage} alt="" className="h-3/4" />
          </div>
        </main>
        <MyFooter />
      </div>
    );
  }
}

export default App;
