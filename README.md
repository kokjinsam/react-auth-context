## React Auth Context

> Injects Meteor Auth into React components

### Installation

```
npm install --save react-auth-context
```

### Usage

```
import React, { Component } from 'react';
import radium from 'radium';
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

export default radium(injectContext(HomePage));
```
