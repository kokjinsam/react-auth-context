## Apollo Queries for React Komposer

> For more information on React Komposer, see [here](https://github.com/kadirahq/react-komposer).

### Installation

```
npm install --save react-komposer-queries mantra-core apollo-client
```

> mantra-core and apollo-client are peerDependencies of react-komposer-redux

### Usage

In `configs/context.js`:

```
import * as Collections from '../../lib/collections';
import { Meteor } from 'meteor/meteor';
import { FlowRouter } from 'meteor/kadira:flow-router-ssr';
import { Tracker } from 'meteor/tracker';
import ApolloClient, { createNetworkInterface } from 'apollo-client';

export default function () {
  const url = Meteor.absoluteUrl('graphql');
  const networkInterface = createNetworkInterface(url);
  const Client = new ApolloClient({
    networkInterface,
  });

  return {
    Meteor,
    FlowRouter,
    Collections,
    Tracker,
    Client, // make sure to supply this
  };
}
```

Here's an example of a Mantra container:

```
import TodoList from '../../components/todo-list';
import composeWithQueries from 'react-komposer-queries';
import { useDeps, composeAll } from 'mantra-core';

const query = `
  allTodos {
    _id
    todo
    createdAt
  }
`;

const dataMapper = ({
  data,
  errors,
}) => {
  const {
    allTodos,
  } = data;

  return {
    todos: allTodos,
    errors,
  };
};


export default composeAll(
  composeWithQueries(query, dataMapper),
  useDeps()
)(TodoList);

```
