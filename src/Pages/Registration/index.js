import React, { Component } from 'react';

class RegistrationPage extends Component {

    render() {
        return (
            <div className="login">
                <h2>RegistrationPage</h2>
                <form>
                    <input type="email"/>
                    <input type="password"/>
                </form>
            </div>
        );
    }
}

export default RegistrationPage;