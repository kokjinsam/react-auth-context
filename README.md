## React Auth Context

> Injects Meteor Auth into React components

### Installation

```
npm install --save react-auth-context
```

### Usage

First create a layout component with childContextTypes:
```
import React, { Component, PropTypes } from 'react';

const childContextTypes = {
  isLoggedIn: PropTypes.bool,
  isLoggingIn: PropTypes.bool,
};

class TrioLayout extends Component {
  getChildContext() {
    const {
      loggedIn,
      loggingIn,
    } = this.props;

    return {
      isLoggedIn: loggedIn,
      isLoggingIn: loggingIn,
    };
  }

  render() {
    return (
      <div>
        {content()}
      </div>
    );
  }
}

Layout.childContextTypes = childContextTypes;
export default TrioLayout;

```

Then create a container for the layout container using `meteor-auth`:

```
npm install -s meteor-auth
```

Lastly, use `react-auth-context` to inject `isLoggedIn` and `isLoggingIn`:
```
import React, { Component } from 'react';
import injectContext from 'react-auth-context';

class HomePage extends Component {
  render() {
    const {
      isLoggingIn,  // this is available from injectContext
      isLoggedIn,  // this is available from injectContext
    } = this.props;

    return (
      <div>
        <span>Home Page</span>
      </div>
    );
  }
}

export default injectContext(HomePage);
```
