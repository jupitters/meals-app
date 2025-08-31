import React, { useContext, useEffect } from 'react'

const AppContext = React.createContext();

const allMealsUls = 'https://www.themealdb.com/api/json/v1/1/search.php?s=a'
const randomMeakUrl = 'https://www.themealdb.com/api/json/v1/1/random.php'

const AppProvider = ({ children }) => {

  const fetchData = async ()=> {
      try {
        const response = await fetch('https://randomuser.me/api');
        const data = response.json();
        console.log(data);
      } catch (error) {
        console.log(error);
      }
    }
    fetchData();

  useEffect(()=>{
    
  },[])

  return <AppContext.Provider  value={{"name":"me", "profession":"developer"}}>
    {children}
  </AppContext.Provider>
}

export const useGlobalContext = () => {
  return useContext(AppContext);
}

export { AppContext, AppProvider }