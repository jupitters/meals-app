import { createContext, useContext, useEffect, useState } from 'react'

const AppContext = createContext();

import axios from 'axios';
const allMealsUrls = 'https://cors-anywhere.herokuapp.com/https://www.themealdb.com/api/json/v1/1/search.php?s=a'
const randomMealUrl = 'https://www.themealdb.com/api/json/v1/1/random.php'

const AppProvider = ({ children }) => {
  const [meals, setMeals] = useState([]);

  const fetchMeals = async (url)=> {
      try {
        const { data } = await axios.get(url);
        setMeals(data.meals);
      } catch (e) {
        console.log(e.response);
      }
    }

  useEffect(()=>{
    fetchMeals(allMealsUrls);
  },[])

  return <AppContext.Provider  value={{ meals }}>
    {children}
  </AppContext.Provider>
}

// export const useGlobalContext = () => {
//   return useContext(AppContext);
// }

export { AppContext, AppProvider }