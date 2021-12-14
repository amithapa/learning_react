import React from "react";

class ClickCounterTwo extends React.Component {

    render() {
        const {count, incrementCount} = this.props;
        return (
            <div>
                <button onClick={incrementCount}>Click {count} times</button>
            </div>
        );
    }
}

export default ClickCounterTwo;