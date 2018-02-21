import React from 'react';
import Link from 'gatsby-link';
import Masthead from '@/components/Masthead';
import Carousel from "@/components/Carousel";

class SecondPage extends React.Component {
  render() {
    return (
      <div>
        <Masthead
          className="btn"
          buttonLink="/"
          buttonText="Header Text"
        />
        <h1>This is a 2nd page</h1>
        <Carousel />
        <Link
          to="/"
          className="btn orange"
        >Go back to the homepage
        </Link>
      </div>
    );
  }
}

export default SecondPage;
