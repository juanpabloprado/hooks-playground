import {useState} from "react";

function App() {
    const [state, setState] = useState({city: '', country: ''});

    const handleCityChange = (e) => {
        setState({...state, city: e.target.value});
    };

    const handleCountryChange = (e) => {
        setState({...state, country: e.target.value});
    };

    return (
       <form>
           <input
               type="text"
               value={state.city}
               placeholder="City"
               onChange={handleCityChange}
           />

           <input
               type="text"
               value={state.country}
               placeholder="Country"
               onChange={handleCountryChange}
           />

           <p>
               You live in { `${state.city}, ${state.country}` }
           </p>
       </form>
    );
}

export default App;
