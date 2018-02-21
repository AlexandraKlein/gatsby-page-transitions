import React from 'react';
import Link from 'gatsby-link';
import Masthead from '@/components/Masthead';

const IndexPage = () => (
  <div>
    <Masthead
      buttonLink="/page-2"
      buttonText="Albert Is Cool"
    />
    <h1>This is the Homepage</h1>
    <Link to="/page-2/">Go to page 2</Link>
  </div>
);

export default IndexPage;
