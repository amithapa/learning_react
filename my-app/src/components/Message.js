import React from 'react';

class Message extends React.Component {
    constructor() {
        super();
        this.state = {
            message: "Welcome visitor",
            isSubscribed: false,
        };
    }

    changeMessage() {
        this.setState({
            message: "Thank you for subscribing",
            isSubscribed: true
        });
    }

    render() {
        return (
            <div>
                <h1>{this.state.message}</h1>
                {this.state.isSubscribed? '' : <button onClick={() => this.changeMessage()}>Subscribe</button>}
            </div>
        );
    }
}

export default Message;