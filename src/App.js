import React from "react";
import Titles from "./components/Titles";
import Form from "./components/Form";
import Weather from "./components/Weather";

const API_KEY = "d507952f39f004fe8b4abb451607bca1";

class App extends React.Component {
  render () {
    return (
      <div>
        <Titles />
        <Form />
        <Weather />
      </div>
    );
  }
};

export default App;
