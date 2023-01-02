import React, {Component, createContext} from "react";

const NameContext = createContext("");

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: "Juan Pablo Prado"
        }
    }

    render() {
        return (
            <NameContext.Provider value={this.state.name}>
                <Child/>
            </NameContext.Provider>
        )
    }
}
class Button extends Component {
    render() {
        return (
            <NameContext.Consumer>
                {name => <button>{name}</button>}
            </NameContext.Consumer>
        );
    }
}

class GrandChild extends Component {
    render() {
        return (
            <div className="grandchild">
                <Button/>
            </div>
        )
    }
}

class Child extends Component {
    render() {
        return (
            <section className="child">
                <GrandChild/>
            </section>
        )
    }
}

export default App;
