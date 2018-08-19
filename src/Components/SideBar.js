import React from "react";

const imgStyle = {
  width: "200px",
  height: "200px"
};

class SideBar extends React.Component {
  render() {
    return (
      <nav
        className="w3-sidebar w3-light-grey w3-collapse w3-top"
        style={this.props.styleNav}
        id="mySidebar"
      >
        <div className="w3-container w3-display-container w3-padding-16">
          <button
            className="w3-hide-large w3-button w3-transparent w3-display-topright"
            onClick={this.props.onClickClose}
          >
            <i className="fa fa-remove" />
          </button>

          <h3>Seu pedido:</h3>

          <hr />

          <img src={require("./burger.png")} style={imgStyle} />

          <form action="/action_page.php" target="_blank">
            <p>
              <label>
                <i className="fa fa-calendar-check-o" /> Check In
              </label>
            </p>
            <input
              className="w3-input w3-border"
              type="text"
              placeholder="DD MM YYYY"
              name="CheckIn"
              required
            />
            <p>
              <label>
                <i className="fa fa-calendar-o" /> Check Out
              </label>
            </p>
            <input
              className="w3-input w3-border"
              type="text"
              placeholder="DD MM YYYY"
              name="CheckOut"
              required
            />
            <p>
              <label>
                <i className="fa fa-male" /> Adults
              </label>
            </p>
            <input
              className="w3-input w3-border"
              type="number"
              value="1"
              name="Adults"
              min="1"
              max="6"
            />
            <p>
              <label>
                <i className="fa fa-child" /> Kids
              </label>
            </p>
            <input
              className="w3-input w3-border"
              type="number"
              value="0"
              name="Kids"
              min="0"
              max="6"
            />
            <p>
              <button
                className="w3-button w3-block w3-green w3-left-align"
                type="submit"
              >
                <i className="fa fa-search w3-margin-right" /> Search
                availability
              </button>
            </p>
          </form>
        </div>
        <div className="w3-bar-block">
          <a href="#apartment" className="w3-bar-item w3-button w3-padding-16">
            <i className="fa fa-building" /> Apartment
          </a>
          <a
            className="w3-bar-item w3-button w3-padding-16"
            onclick="document.getElementById('subscribe').style.display='block'"
          >
            <i className="fa fa-rss" /> Subscribe
          </a>
          <a href="#contact" className="w3-bar-item w3-button w3-padding-16">
            <i className="fa fa-envelope" /> Contact
          </a>
        </div>
      </nav>
    );
  }
}

export default SideBar;
