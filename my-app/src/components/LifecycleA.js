import React from "react";
import LifecycleB from "./LifeCycleB";

class LifecycleA extends React.Component {
    
    constructor(props) {
        super(props);

        this.state = {
            name: "Amit",
        };
        console.log("LifeCycleA constructor");
    }

    static getDerivedStateFromProps(props, state) {
        console.log("LifecycleA getDerivedStateFromProps");
        return null;
    }

    shouldComponentUpdate() {
        console.log("LifecycleA shouldComponentUpdate");
        return true;
    }

    getSnapshotBeforeUpdate(prevProps, prevState) {
        console.log("LifecycleA getSnapshotBeforeUpdate");
        return null;
    }

    componentDidUpdate() {
        console.log("LifecycleA componentDidUpdate");
    }

    componentDidMount() {
        console.log("LifecycleA componentDidMount");
    }

    changeState = () => {
        this.setState({
            name: "CodeVolution",
        });
    }

    componentWillUnmount() {
        // perform necessary cleanup.
        console.log("Unmounting");
    }

    render() {
        console.log("LifecycleA  render")
        return (
            <div>
                <div>LifeCycle A</div>
                <button onClick={this.changeState}>Change State</button>
                <LifecycleB />
            </div>
        );

    }
}

export default LifecycleA;