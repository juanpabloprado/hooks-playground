import {useEffect, useState} from "react";

function App() {
    const [count, setCount] = useState(0);
    const handleIncrement = () => setCount(count + 1);
    const handleDecrement = () => setCount(count - 1);

    useEffect(() => console.log(`The current count is ${count}`));
    return (
        <div>
            <button onClick={handleIncrement}>Increment</button>
            <button onClick={handleDecrement}>Decrement</button>
            <h1>Count: {count}</h1>
        </div>
    );
}

export default App;
