import React, {useState} from "react";

function useCounter(startingCount = 0) {
    const [count, setCount] = useState(startingCount);

    return {
        count,
        increment: () => setCount(count + 1),
        decrement: () => setCount(count - 1)
    };
}

function Display(props) {
    const {count, increment, decrement} = useCounter(props.start);

    return (
        <div>
            <button onClick={increment}>Increment</button>
            <button onClick={decrement}>Decrement</button>
            <h1>Count: {count}</h1>
        </div>
    )
}

function FancyDisplay(props) {
    const {count, increment, decrement} = useCounter(props.start);

    return (
        <section>
            <button onClick={increment}>Increment</button>
            <button onClick={decrement}>Decrement</button>
            <h2>Count: {count}</h2>
        </section>
    )
}

function App() {
    return (
        <>
            <Display start={10}/>
            <Display start={20}/>
            <FancyDisplay start={30}/>
        </>
    )
}

export default App;
