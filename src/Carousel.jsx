import { Component } from "react";

class Carousel extends Component {
  state = {
    active: 0,
  };

  handleClick = (e) => {
    this.setState({ active: +e.target.dataset.index });
  };

  render() {
    const { active } = this.state;
    const { images } = this.props;
    return (
      <div className="carousel">
        <img src={images[active]} alt="animaltop" />
        <div className="carousel-smaller">
          {images.map((photo, index) => (
            //eslint-disable-next-line
            <img
              onClick={this.handleClick}
              src={photo}
              data-index={index}
              key={photo}
              alt="property"
            />
          ))}
        </div>
      </div>
    );
  }
}

export default Carousel;
