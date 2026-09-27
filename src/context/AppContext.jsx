
import { createContext, useContext, useEffect, useState } from "react";

const apiKey = import.meta.env.VITE_API_KEY;
// const id = import.meta.env.VITE_API_ID;

const API_url = `https://www.omdbapi.com/?apikey=${apiKey}&s=`

const AppContext = createContext();

const AppProvider = ({children}) => {

    const [isLoading, setIsLoading] = useState(true)
    const [movie, setMovie] = useState([]);
    const [isError, setIsError] = useState({ show: 'false', msg: ""})

    const [query, setQuery] = useState("titanic");

    const getMovies = async(url) => {
        try{
            const res = await fetch(url);
            const data = await res.json(); 

            if(data.Response === 'True'){
                setIsLoading(false);
                                setIsError({ show: false , msg: ""} )
                setMovie(data.Search);
            }
            else{
                setIsError({ show: true , msg: data.Error} )
            }
        }catch(error) {
            console.log(error); 
        }
    }

    useEffect(() => {

        // Debauncing 
        let timerOut =  setTimeout(() => {
            getMovies(`${API_url}${query}`);
        },1000);
        
        return () => clearTimeout(timerOut)
    },[query])

    return <AppContext.Provider value={{isLoading, isError, movie, query, setQuery}}>
        {children}
    </AppContext.Provider>
};

// global custom hook
const useGlobalContext = () => {
    return useContext(AppContext);
}

export {AppContext, AppProvider, useGlobalContext}