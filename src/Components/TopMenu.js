import React from "react";

class TopMenu extends React.Component {
  render() {
    return (
      <div className="w3-bar w3-top w3-hide-large w3-black w3-xlarge">
        <button
          className="w3-right w3-bar-item w3-button"
          onClick={this.props.onClick}
        >
          <i className="fa fa-bars" /> Menu
        </button>
        <span className="w3-bar-item">Crazy Burger</span>
      </div>
    );
  }
}

export default TopMenu;
