import React from "react";

class LifecycleB extends React.Component {
    
    constructor(props) {
        super(props);

        this.state = {
            name: "Amit",
        };
        console.log("LifeCycleB constructor");
    }

    static getDerivedStateFromProps(props, state) {
        console.log("LifecycleB getDerivedStateFromProps");
        return null;
    }
    shouldComponentUpdate() {
        console.log("LifecycleB shouldComponentUpdate");
        return true;
    }

    getSnapshotBeforeUpdate(prevProps, prevState) {
        console.log("LifecycleB getSnapshotBeforeUpdate");
        return null;
    }

    componentDidUpdate() {
        console.log("LifecycleB componentDidUpdate");
    }

    componentDidMount() {
        console.log("LifecycleB componentDidMount");
    }

    render() {
        console.log("LifecycleB  render")
        return (
            <div>
                LifeCycle B
            </div>
        );

    }
}

export default LifecycleB;