import React, { Component } from "react";
import "./App.css";
import SideBar from "./Components/SideBar";
import TopMenu from "./Components/TopMenu";

class App extends Component {
  constructor() {
    super();
    this.state = {
      styleNav: {
        zIndex: 3,
        width: "260px",
        display: "none"
      }
    };
    this.handleClickOpen = this.handleClickOpen.bind(this);
  }

  handleClickOpen() {
    const display = this.state.styleNav.display;
    if (display === "none") {
      this.setState({
        styleNav: {
          zIndex: 3,
          width: "260px",
          display: "block"
        }
      });
    } else {
      this.setState({
        styleNav: {
          zIndex: 3,
          width: "260px",
          display: "none"
        }
      });
    }
  }

  handleClickClose() {
    this.setState({
      styleNav: {
        zIndex: 3,
        width: "260px",
        display: "none"
      }
    });
  }

  render() {
    return (
      <div className="App">
        <SideBar
          styleNav={this.state.styleNav}
          onClickClose={() => this.handleClickClose()}
        />
        <TopMenu onClick={() => this.handleClickOpen()} />
      </div>
    );
  }
}

export default App;
