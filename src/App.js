import React, {createContext, useContext, useState} from "react";

const NameContext = createContext("");

function App() {
    const [name] = useState('Billy Shakespeare');

    return (
        <NameContext.Provider value={name}>
            <Child/>
        </NameContext.Provider>
    )

}

function Child() {
    return (
        <section className="child">
            <GrandChild/>
        </section>
    )
}

function GrandChild() {
    return (
        <div className="grandchild">
            <Button/>
        </div>
    )
}

function Button() {
    const name = useContext(NameContext);

    return (
        <button>{ name }</button>
    );
}

export default App;
