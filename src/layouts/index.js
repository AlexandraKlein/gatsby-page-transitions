import React from 'react';
import PropTypes from 'prop-types';
import withRouter from 'react-router-dom/withRouter';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import Helmet from 'react-helmet';

import '@/styles/variables.global';
import '@/styles/animations.global';
import '@/styles/base.global';

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
    <TransitionGroup>
      <CSSTransition
        key={location.pathname}
        classNames="transition"
        timeout={{ enter: 500, exit: 500 }}
      >
        <TransitionHandler
          location={location}
        >
          <div>
            { children() }
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
  // eslint-disable-next-line
  children: PropTypes.object
};

export default withRouter(TemplateWrapper);
