import {useEffect, useState} from "react";

function Counter() {
    const [count, setCount] = useState(0);
    const handleIncrement = () => setCount(count + 1);
    const handleDecrement = () => setCount(count - 1);

    useEffect(() => {
        console.log(`I'm inside the useEffect function. The current count is ${count}`);

        return () => {
            console.log(`I'm removing anything that was set up above! The last count was ${count}`);
        }
    });
    return (
        <div>
            <button onClick={handleIncrement}>Increment</button>
            <button onClick={handleDecrement}>Decrement</button>
            <h1>Count: {count}</h1>
        </div>
    );
}
function App() {
    const [visible, setVisible] = useState(false);

    return (
        <div>
            <button onClick={() => setVisible(!visible)}>
                Show / Hide the Counter component
            </button>
            {visible && <Counter/>}
        </div>
    )
}

export default App;
