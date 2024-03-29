import React from "react";
import withCounter from "./withCounter";


class ClickCounter extends React.Component {
    // constructor(props) {
    //     super(props);

    //     this.state = {
    //         count: 0,
    //     }
    // }

    // incrementCount = () => {
    //     this.setState((prevState) => {
    //         return {count: prevState.count + 1};
    //     })
    // }



    render() {
        const {count, incrementCount} = this.props;
        return (
            <div>
                <button onClick={incrementCount}>{this.props.name} Clicked {count} times</button>
            </div>
        );
    }
}

export default withCounter(ClickCounter, 5);