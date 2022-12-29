import {useState} from "react";

function App() {
    const [count, setCount] = useState(0)

    const incrementClick = () => setCount(count + 1);
    // const incrementClick = () => setCount(prevCount => prevCount + 1)
    const decrementClick = () => setCount(count - 1);
    // const decrementClick = () => setCount(prevCount => prevCount - 1)
    const resetClick = () => setCount(0);

    return (
       <div>
           <button onClick={incrementClick}>Increment</button>
           <button onClick={decrementClick}>Decrement</button>
           <button onClick={resetClick}>Reset</button>
           <h1>{count}</h1>
       </div>
    );
}

export default App;
