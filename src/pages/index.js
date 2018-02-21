import React from 'react';
import Link from 'gatsby-link';
import Masthead from '@/components/Masthead';

const IndexPage = () => (
  <div>
    <Masthead
      buttonLink="/page-2"
      buttonText="Header Text"
    />
    <h1>This is the Homepage</h1>
    <Link
      to="/page-2/"
      className="btn orange"
    >
      Go to page 2
    </Link>
  </div>
);

export default IndexPage;
