import React from "react";
import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Main from "./components/Main";
import "bootstrap/dist/css/bootstrap.min.css";
import Beasts from "./components/Beasts.json";

class App extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <Main beasts={Beasts} />
        <Footer />
      </div>
    );
  }
}

export default App;
