import React, { Component } from 'react';
import Routes from './Routes'
import { connect } from 'react-redux';
import './index.scss';

class App extends Component {

    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <h1 className="App-title">News Portal</h1>
                </header>
                <Routes articles={this.props.articles}/>
            </div>
        );
    }
}

export default connect(
    state => ({
        articles: state.articles
    }),
    dispatch => ({})
)(App);
