import React from "react";
import "./homepage.styles.scss";
import Directory from "../components/directory.component";

class HomePage extends React.Component {
  constructor() {
    super();
    this.state = {
      menuItems: [
        {
          title: "HATS",
          subtitle: "Shop Now"
        },
        {
          title: "JACKETS",
          subtitle: "Shop Now"
        },
        {
          title: "SNEAKERS",
          subtitle: "Shop Now"
        },
        {
          title: "WOMENS",
          subtitle: "Shop Now",
          size: "Large"
        },
        {
          title: "MENS",
          subtitle: "Shop Now",
          size: "Large"
        }
      ]
    };
  }

  render() {
    return (
      <div className="homepage">
        <Directory menuItems={this.state.menuItems} />
      </div>
    );
  }
}

export default HomePage;
