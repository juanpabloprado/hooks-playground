import {useState} from "react";

function App() {
    const [city, setCity] = useState('');
    const [country, setCountry] = useState('');

    const handleCityChange = (e) => setCity(e.target.value)
    const handleCountryChange = (e) => setCountry(e.target.value)
    return (
       <form>
           <input
               type="text"
               placeholder="City"
               onChange={handleCityChange}
               value={city}
           />

           <input
               type="text"
               placeholder="Country"
               onChange={handleCountryChange}
               value={country}
           />

           <p>
               You live in { `${city}, ${country}` }
           </p>
       </form>
    );
}

export default App;
