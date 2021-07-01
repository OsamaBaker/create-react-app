import React from "react";
import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Main from "./components/Main";
import "bootstrap/dist/css/bootstrap.min.css";
import Beasts from "./components/Beasts.json";
import SelectedBeast from "./components/SelectedBeast";


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showModal: false,
      beastData: Beasts,
      modalData: {},
    };
  }

  showBeast = (data) => {
    this.setState({
      showModal: true,
      modalData: data,
    });
  };

  hideBeast = () => {
    this.setState({
      showModal: false,
    });
  };

  filterBeasts = (value) => {
    let filteredArr = Beasts.filter((item) => {
      if (Number(value) === Number(item.horns)) {
        return item;
      } else if(value === 'all') {
        return item;
      }
    });
    this.setState({
      beastData: filteredArr
    })
  };


  render() {
    return (
      <div>
        <Header/>
        <Main
          showBeast={this.showBeast}
          beasts={this.state.beastData}
          filter={this.filterBeasts}
        />
        <SelectedBeast
          hideBeast={this.hideBeast}
          showData={this.state.showModal}
          modalData={this.state.modalData}
        />
        <Footer />
      </div>
    );
  }
}

export default App;

