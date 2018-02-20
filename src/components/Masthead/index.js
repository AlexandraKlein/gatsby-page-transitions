import React from 'react';
import PropTypes from 'prop-types';
import Link from 'gatsby-link';

import styles from "./masthead.module";

const Masthead = (props) => (
  <div className={styles['masthead']}>
    <Link
      to={props.buttonLink}
    >
      {props.buttonText}
    </Link>
  </div>
);

Masthead.propTypes = {
  buttonLink: PropTypes.string,
  buttonText: PropTypes.string,
};

export default Masthead;
