import React from 'react';
import NukaCarousel from 'nuka-carousel';

import '@/styles/base.global';
import styles from './carousel.module';

// eslint-disable-next-line
class Carousel extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick(e) {
    e.preventDefault();
    console.log(e.currentTarget.textContent);
  }
  render() {
    const Decorators = {}
    const settings = {
      wrapAround: true,
      width: '100vw',
      slideWidth: 1.0,
      slidesToShow: 2
    };
    return (
      <NukaCarousel
        className={`${styles['carousel']}`}
        {...settings}
      >
        <div className={`${styles['carousel-slide']}`}>
          <h1>1</h1>
        </div>
        <a
          role="presentation"
          onClick={this.handleClick}
          className={`${styles['carousel-slide']}`}
        >
          <h1>2</h1>
        </a>
        <div className={`${styles['carousel-slide']}`}>
          <h1>3</h1>
          <div />
        </div>
        <a
          role="presentation"
          onClick={this.handleClick}
          className={`${styles['carousel-slide']}`}
        >
          <h1>4</h1>
        </a>
        <div className={`${styles['carousel-slide']}`}>
          <h1>5</h1>
          <div />
        </div>
        <a
          role="presentation"
          onClick={this.handleClick}
          className={`${styles['carousel-slide']}`}
        >
          <h1>6</h1>
        </a>
      </NukaCarousel>
    );
  }
}

export default Carousel;
