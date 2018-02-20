import React from 'react';
//import Slider from 'react-slick';
import NukaCarousel from 'nuka-carousel';

import '@/styles/base.global';

import styles from "./carousel.module";

// eslint-disable-next-line
class Carousel extends React.Component {
  render() {
    const settings = {
      autoplay: true,
      autoplayInterval: 1000,
      slidesToShow: 2,
      wrapAround: true,
      cellAlign: 'center'
    };
    return (
      <NukaCarousel
        {...settings}
      >
        <div className={`${styles['carousel-slide']}`}>
          <h1>&quot;OH MY GOD, YOU CAN BOOK A RESERVATION AT THE TACO BELL TEST KITCHEN!&quot;</h1>
        </div>
        <div className={`${styles['carousel-slide']}`}>
          <h1>&quot;A MAGICAL MYSTERY LAND FOR FOOD LOVERS&quot;</h1>
          <div />
        </div>
        <div className={`${styles['carousel-slide']}`}>
          <h1>&quot;THIS IS BIG.&quot;</h1>
          <div />
        </div>
        <div className={`${styles['carousel-slide']}`}>
          <h1>&quot;HOLY CHALUPA!&quot;</h1>
          <div />
        </div>
        <div className={`${styles['carousel-slide']}`}>
          <h1>&quot;BEYONCE ALBUM-DROP STYLE&quot;</h1>
          <div />
        </div>
      </NukaCarousel>
    );
  }
}

export default Carousel;
