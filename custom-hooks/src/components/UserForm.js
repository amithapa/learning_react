import React, { useState } from 'react'
import useInput from '../hooks/useInput';

function UserForm() {
    // const [firstName, setFirstName] = useState("");
    // const [lastName, setLastName] = useState("");

    const [firstName, bindFirstName, resetFirstName] = useInput("")
    const [lastName, bindLastName, resetLastName] = useInput("")

    const submitHandler = (e) => {
        e.preventDefault();
        alert(`Hello ${firstName} ${lastName}`);

        resetFirstName();
        resetLastName();
    }

    return (
        <div>
            <form onSubmit={submitHandler}>
                <div>
                    <label>First Name</label>
                    <input type="text" {...bindFirstName} />
                </div>
                <div>
                    <label>Last Name</label>
                    <input type="text" {...bindLastName} />
                </div>
                <button type="submit">Submit</button>
            </form>
        </div>
    )
}

export default UserForm
