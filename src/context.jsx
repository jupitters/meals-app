import { createContext, useEffect, useState } from 'react'

const AppContext = createContext();

import axios from 'axios';
// usando https://cors-anywhere.herokuapp.com/ para acessar a api
const allMealsUrls = 'https://www.themealdb.com/api/json/v1/1/search.php?s='
const randomMealUrl = 'https://www.themealdb.com/api/json/v1/1/random.php'

const AppProvider = ({ children }) => {
  const [meals, setMeals] = useState([]);
  const [loading, setLoading] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [showModal, setShowModal] = useState(false);
  const [selectedMeal, setSelectedMeal] = useState(null);

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

  const fetchRandomMeal = () => {
    fetchMeals(randomMealUrl)
  }

  const selectMeal = (idMeal, favoriteMeal) => {
    let meal;
    meal = meals.find((meal)=> meal.idMeal === idMeal);

    setSelectedMeal(meal);
    setShowModal(true);
  }

  const closeModal = () => {
    setShowModal(false);
  }

  useEffect(()=>{
    fetchMeals(allMealsUrls);
  },[])

  useEffect(()=>{
    if(!searchTerm) return
    fetchMeals(`${allMealsUrls}${searchTerm}`);
  },[searchTerm])

  return <AppContext.Provider value={{ loading, meals, setSearchTerm, fetchRandomMeal, showModal, selectMeal, selectedMeal, closeModal }}>
    {children}
  </AppContext.Provider>
}

// export const useGlobalContext = () => {
//   return useContext(AppContext);
// }

export { AppContext, AppProvider }