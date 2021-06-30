import React from "react";
import HornedBeasts from "./HornedBeasts";
import "../App.css";
// import SelectedBeast from "./SelectedBeast";


class Main extends React.Component {


  render() {
    return (
      <div>
        {this.props.beasts.map((item, index) => {
          return (
            <HornedBeasts
              title={item.title}
              image_url={item.image_url}
              description={item.description}
              key={index}
              modal={this.props.showBeast}
              />
              );
            })}
            
      </div>
    );
  }
}

export default Main;
