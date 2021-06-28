import React from "react";
import HornedBeasts from "./HornedBeasts";
import "../App.css";

class Main extends React.Component {




  render() {
    return (
      <div>
        {this.props.beasts.map((item) => {
          return (
            <HornedBeasts
              title={item.title}
              image_url={item.image_url}
              description={item.description}
            />
          );
        })}
      </div>
    );
  }
}

export default Main;
