import react,{useState} from "react";
import SearchContext from "./SearchContext";

const SearchState=(props)=>{

    const [contact, setcontact] = useState([]);
    const [search, setsearch] = useState({name:"",contact:""});



    return(
        <SearchContext.Provider value={{contact, setcontact,search, setsearch}}>
            {props.children}
        </SearchContext.Provider>
    )
}

export default SearchState;