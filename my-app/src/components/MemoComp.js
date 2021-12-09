import React from "react";

function MemoComp({name}) {
    console.log("Rendering MemoComp")
    return (
        <div>
            MemoComp {name}
        </div>
    );
}

export default React.memo(MemoComp);