import React from "react";
import mouse from "./assets/mouse.svg";
import "./scroll.css";

class Scroll extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      shouldHide: false
    };
  }
  handleScroll = () => {
    this.setState({ shouldHide: true });
  };
  componentDidMount() {
    window.addEventListener("scroll", this.handleScroll);
  }
  render() {
    return (
      <section className={`scroll-section ${this.state.shouldHide ? 'hidden' : ''}`}>
        <img
          className={'scroll-icon'}
          style={{ backgroundImage: `url(${mouse})` }}
        />
        <p className="scroll-text">Scroll</p>
      </section>
    );
  }
}

export default Scroll;
