import { useState } from "react";
import { useDispatch } from "react-redux";

function Search () {
    const [search, setSearch] = useState('')
    const dispatch = useDispatch();

    const handleInputChange = (e) => {
        setSearch(e.target.value);
    }

    const handleSearch = (e) => {
        e.preventDefault();
        dispatch({
            type: 'KEYWORD',
            keyword: search
        })
        setSearch('')
    }
    
    return(    
        <form class="w-50 mx-auto d-flex flex-row gap-2" role="search" onSubmit ={handleSearch}>
                <input 
                    type="text" 
                    class="form-control" 
                    placeholder="Search..." 
                    aria-label="Search.." 
                    aria-describedby="button-addon2"
                    onChange={handleInputChange}
                />
                <button class="btn btn-dark" type="submit" id="button-addon2">Search</button>
        </form>  
    )
}

export default Search;