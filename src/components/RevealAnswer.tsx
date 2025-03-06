import React, { useState } from "react";
import { Button } from "react-bootstrap";

export function RevealAnswer(): React.JSX.Element {
    const [visibility, setVisibility] = useState<boolean>(false);
    function toggleVisibility(): void {
        setVisibility(!visibility);
    }

    return <div><Button onClick={toggleVisibility}>Reveal Answer</Button>
    {visibility && <div>42</div>}
    </div>

}
