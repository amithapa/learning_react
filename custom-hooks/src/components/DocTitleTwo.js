import React, { useState } from 'react'
import useDocumentTitlle from '../hooks/useDocumentTitlle';

function DocTitleTwo() {
    const [count, setCount] = useState(0);

    useDocumentTitlle(count);


    return (
        <div>
            <button onClick={() => setCount(count+1)}>Count - {count}</button>
        </div>
    )
}

export default DocTitleTwo
