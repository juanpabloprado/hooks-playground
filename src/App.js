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
               value={city}
               placeholder="City"
               onChange={handleCityChange}
           />

           <input
               type="text"
               value={country}
               placeholder="Country"
               onChange={handleCountryChange}
           />

           <p>
               You live in { `${city}, ${country}` }
           </p>
       </form>
    );
}

export default App;
