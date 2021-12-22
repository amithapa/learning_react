import React, {useEffect} from 'react'

function useDocumentTitlle(count) {
    useEffect(() => {
        document.title = `Count ${count}`;
    }, [count]);
}

export default useDocumentTitlle
