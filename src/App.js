import {useState} from "react";

function App() {
    const [count, setCount] = useState(0)

    const handleClick = () => setCount(count + 1);
    // const handleClick = () => setCount(prevCount => prevCount + 1)

    return (
       <div>
           <button onClick={handleClick}>Increment</button>
           <h1>{count}</h1>
       </div>
    );
}

export default App;
