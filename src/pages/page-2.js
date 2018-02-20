import React from 'react';
import Link from 'gatsby-link';
import Carousel from "@/components/Carousel";

class SecondPage extends React.Component {
  render() {
    console.log('PAGE 2 RENDER', this.props);
    return (
      <div>
        <h1>This is a 2nd page</h1>
        <p>Welcome to it</p>
        <Link to="/">Go back to the homepage</Link>
        <Carousel />
      </div>
    );
  }
}

export default SecondPage;
