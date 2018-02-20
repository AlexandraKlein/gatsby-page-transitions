import React from 'react';
import Link from 'gatsby-link';
import Masthead from '@/components/Masthead';

const IndexPage = () => (
  <div>
    <Masthead
      buttonLink="/page-2"
      buttonText="Albert Is Cool"
    />
    <h1>Hi people</h1>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
    <Link to="/page-2/">Go to page 2</Link>
  </div>
);

export default IndexPage;
