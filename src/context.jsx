import { createContext, useEffect, useState } from 'react'

const AppContext = createContext();

import axios from 'axios';
const allMealsUrls = 'https://cors-anywhere.herokuapp.com/https://www.themealdb.com/api/json/v1/1/search.php?s='
// const randomMealUrl = 'https://www.themealdb.com/api/json/v1/1/random.php'

const AppProvider = ({ children }) => {
  const [meals, setMeals] = useState([]);
  const [loading, setLoading] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');

  const fetchMeals = async (url)=> {
    setLoading(true);
      try {
        const { data } = await axios.get(url);
        if (data.meals) 
        {
          setMeals(data.meals);
        }
        else
        {
          setMeals([]);
        }
      } catch (e) {
        console.log(e.response);
      }
      setLoading(false);
    }

  useEffect(()=>{
    fetchMeals(`${allMealsUrls}${searchTerm}`);
  },[searchTerm])

  return <AppContext.Provider  value={{ loading, meals, setSearchTerm }}>
    {children}
  </AppContext.Provider>
}

// export const useGlobalContext = () => {
//   return useContext(AppContext);
// }

export { AppContext, AppProvider }