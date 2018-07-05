import React, { Component } from 'react';

class LoginPage extends Component {

    render() {
        return (
            <div className="login">
                <h2>LOGIN</h2>
                <form>
                    <input type="email"/>
                    <input type="password"/>
                </form>
            </div>
        );
    }
}

export default LoginPage;