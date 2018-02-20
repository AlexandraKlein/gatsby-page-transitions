import React from 'react'
import PropTypes from 'prop-types'
import withRouter from 'react-router-dom/withRouter'
import { TransitionGroup, CSSTransition } from 'react-transition-group'
import Link from 'gatsby-link'
import Helmet from 'react-helmet'

import "../styles/animations.scss"
import "../styles/main.scss"
import "../styles/components/header.scss"

const Header = () => (
  <div className="header">
    <div>
      <h1>
        <Link to="/">
          Gatsby Test
        </Link>
      </h1>
    </div>
  </div>
)

class TransitionHandler extends React.Component {
  shouldComponentUpdate(nextProps, nextState) {
    return this.props.location.pathname === window.location.pathname;
  }

  render() {
    const { children } = this.props;
    return (
      <div className="transition-container">
        {children}
      </div>
    );
  }
}

const TemplateWrapper = ({ children, location }) => (
  <div>
    <Helmet
      title="Gatsby Default Starter"
      meta={[
        { name: 'description', content: 'Sample' },
        { name: 'keywords', content: 'sample, something' },
      ]}
    />
    <Header />
    <TransitionGroup>
      <CSSTransition
        key={location.pathname}
        classNames="transition"
        timeout={{ enter: 1000, exit: 1000 }}
      >
        <TransitionHandler
          location={location}
        >
          <div>
            {children()}
          </div>
        </TransitionHandler>
      </CSSTransition>
    </TransitionGroup>
  </div>
);

TemplateWrapper.propTypes = {
  location: PropTypes.shape({
    pathname: PropTypes.string
  }),
  children: PropTypes.func
};

TransitionHandler.propTypes = {
  location: PropTypes.shape({
    pathname: PropTypes.string
  }),
  children: PropTypes.func
};

export default withRouter(TemplateWrapper)
