import React from 'react';
import './App.css';
import Add from './components/Add';
import List from './components/List';

class App extends React.Component {
  render() {
    return (
      <div>
        <List />
        <Add />
      </div>
    )
  }
}

export default App;