import { useState } from "react";
import ActionButton from "./ActionButton";

function CounterPanel() {
    const [count, setCount] = useState(0);

    function handleIncrement() {
        setCount(count => count + 1);
    }

    function handleReset() {
        setCount(0);
    }

    return (
        <div>
            <h3>Click Counter</h3>
            {count === 0
                ? <p>No clicks yet</p>
                : <p>You have clicked {count} times</p>
            }

            <ActionButton
                label="Increment"
                onClick={handleIncrement}
            />
            <ActionButton
                label="Reset"
                onClick={handleReset}
            />
        </div>
    );
}

export default CounterPanel
