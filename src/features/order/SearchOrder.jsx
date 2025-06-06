import { useState } from "react";
import { useNavigate } from "react-router-dom";

function SearchOrder() {
    const [query, setQuery] = useState('');
    const navigate = useNavigate();

    function handleSubmit(e) {
        e.preventDefault();
        if (!query) return;
        navigate(`/order/${query}`);
        setQuery('')
    }
    
    return (
        <form onClick={handleSubmit}>
            <input 
            placeholder="Search order #"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="w-28 rounded-full bg-yellow-100 px-4 py-2 text-sm transition-all duration-300 placeholder:text-stone-400 focuse:outline-none focuse:ring-yellow-500  focuse:ring-opacity-50 sm:w-64 sm:focuse:w-72"
            />
        </form>
    )
}

export default SearchOrder;