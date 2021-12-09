import React from "react";

function Person(props) {
    const {id, name, age, skill} = props.person;
    return (
        <div>
            <h2>I am {name}. I am {age} years old. I know {skill}..</h2>
        </div>
    )
}

export default Person;