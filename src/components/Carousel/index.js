import React from 'react';
import NukaCarousel from 'nuka-carousel';

import '@/styles/base.global';
import styles from './carousel.module';

// eslint-disable-next-line
class Carousel extends React.Component {
  render() {
    return (
      <NukaCarousel
        className={`${styles['carousel']}`}
        wrapAround="true"
        width="100vw"
        slideWidth={1.0}
        slidesToShow={2}
      >
        <div className={`${styles['carousel-slide']}`}>
          <h1>1</h1>
        </div>
        <div className={`${styles['carousel-slide']}`}>
          <h1>2</h1>
          <div />
        </div>
        <div className={`${styles['carousel-slide']}`}>
          <h1>3</h1>
          <div />
        </div>
        <div className={`${styles['carousel-slide']}`}>
          <h1>4</h1>
          <div />
        </div>
        <div className={`${styles['carousel-slide']}`}>
          <h1>5</h1>
          <div />
        </div>
      </NukaCarousel>
    );
  }
}

export default Carousel;
