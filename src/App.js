import React, { Component } from 'react';
import ArticlesList from './Components/ArticlesList';
import './index.scss';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">News Portal</h1>
        </header>
        <ArticlesList/>
      </div>
    );
  }
}

export default App;
