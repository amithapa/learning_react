import React from "react";

class UserGreeting extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            isLoggedIn: false,
        };
    }

    render() {
        return this.state.isLoggedIn && <div>Welcome Daksh!</div>;
        // return (
        //     this.state.isLoggedIn? <div>Welcome Daksh!</div> : <div>Welcome Guest</div>
        // );

        // element varaible
        // let message;
        // if (this.state.isLoggedIn) {
        //     message = <div>Welcome Daksh</div>;
        // } else {
        //     message = <div>Welcome Guest</div>;
        // }
        // return <div>{message}</div>

        // if (this.state.isLoggedIn) {
        //     return (
        //         <div>
        //             Welcome Daksh
        //         </div>
        //     );
        // } else {
        //     return (
        //         <div>
        //             Welcome Guest
        //         </div>
        //     );
        // }
        // return (
        //     <div>
        //         <div>Welcome Daksh</div>
        //         <div>Welcome Guest</div>
        //     </div>
        // );
    }
}

export default UserGreeting;