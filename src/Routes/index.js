import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import HomePage from '../Pages/Home';
import ArticlePage from '../Pages/Article';
import RegistrationPage from '../Pages/Registration';
import LoginPage from '../Pages/Login';
import AddArticlePage from './../Pages/AddArticle';

export default (props) => {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact render={() => <HomePage articles={props.articles}/>}/>
                <Route path="/registration" component={RegistrationPage}/>
                <Route path="/login" component={LoginPage}/>
                <Route path="/article" component={ArticlePage}/>
                <Route path="/add-article" component={AddArticlePage}/>
            </Switch>
        </BrowserRouter>
    )
}