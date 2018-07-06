import React, { Component } from 'react';
import Routes from './Routes'
import { connect } from 'react-redux';
import './index.scss';

class App extends Component {

    articles = null;

    getData = () => {
        fetch('https://mateacademy-react-server.herokuapp.com/api/v1/article/get')
            .then(response => {
                response.json().then(data => {
                    this.articles = data.items
                    console.log(this.articles)
                });
            })
    }

    componentDidMount() {
        this.getData();

    }

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
