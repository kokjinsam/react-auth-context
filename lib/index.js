import React, { PropTypes } from 'react';
import hoistNonReactStatic from 'hoist-non-react-statics';

const getDisplayName = Component => (
  Component.displayName || Component.name || 'Component'
);

function injectContext(AuthComponent) {
  /* eslint-disable react/prefer-es6-class */
  const ComponentWithAuthContext = React.createClass({
    contextTypes: {
      isLoggedIn: PropTypes.bool,
      isLoggingIn: PropTypes.bool,
      currentUser: PropTypes.any,
    },

    render() {
      const context = {
        isLoggedIn: this.context.isLoggedIn,
        isLoggingIn: this.context.isLoggingIn,
        currentUser: this.context.currentUser,
      };

      return (<AuthComponent {...context} {...this.props} />);
    },
  });

  ComponentWithAuthContext.displayName = `WithAuthContext(${getDisplayName(AuthComponent)})`;
  return hoistNonReactStatic(ComponentWithAuthContext, AuthComponent);
}

export default injectContext;
