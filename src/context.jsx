import { createContext, useEffect, useState } from 'react'

const AppContext = createContext();

import axios from 'axios';
import Favorites from './components/Favorites';
// usando https://cors-anywhere.herokuapp.com/ para acessar a api
const allMealsUrls = 'https://cors-anywhere.herokuapp.com/https://www.themealdb.com/api/json/v1/1/search.php?s='
const randomMealUrl = 'https://cors-anywhere.herokuapp.com/https://www.themealdb.com/api/json/v1/1/random.php'

const getFavoritesFromLocalStorage = () => {
    let favorites = localStorage.getItem("favorites");
    if(favorites) {
      favorites = JSON.parse(localStorage.getItem("favorites"));
    } else {
      favorites = []
    }
    return favorites;
}

const AppProvider = ({ children }) => {
  const [meals, setMeals] = useState([]);
  const [loading, setLoading] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [showModal, setShowModal] = useState(false);
  const [selectedMeal, setSelectedMeal] = useState(null);
  const [favorites, setFavorites] = useState(getFavoritesFromLocalStorage());

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
    if(favoriteMeal){
      meal = favorites.find((meal) => meal.idMeal === idMeal)
    } else {
      meal = meals.find((meal)=> meal.idMeal === idMeal);
    }
    
    setSelectedMeal(meal);
    setShowModal(true);
  }

  const closeModal = () => {
    setShowModal(false);
  }

  const addToFavorites = (idMeal) => {
    const meal = meals.find((meal) => meal.idMeal === idMeal);
    const alreadyFavorite = favorites.find((meal) => meal.idMeal === idMeal);
    if (alreadyFavorite) return
    const updatedFavorites = [...favorites, meal];
    setFavorites(updatedFavorites);
    localStorage.setItem('favorites', JSON.stringify(updatedFavorites));
  }

  const removeFromFavorites = (idMeal) => {
    const updatedFavorites = favorites.filter((meal)=> meal.idMeal !== idMeal);
    setFavorites(updatedFavorites);
    localStorage.setItem('favorites', JSON.stringify(updatedFavorites));
  }

  useEffect(()=>{
    fetchMeals(allMealsUrls);
  },[])

  useEffect(()=>{
    if(!searchTerm) return
    fetchMeals(`${allMealsUrls}${searchTerm}`);
  },[searchTerm])

  return <AppContext.Provider value={{ loading, meals, setSearchTerm, fetchRandomMeal, showModal, selectMeal, selectedMeal, closeModal, addToFavorites, removeFromFavorites, favorites }}>
    {children}
  </AppContext.Provider>
}

// export const useGlobalContext = () => {
//   return useContext(AppContext);
// }

export { AppContext, AppProvider }