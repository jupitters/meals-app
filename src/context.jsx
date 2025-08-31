import React, { useContext, useEffect } from 'react'

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const apiUrl = "https://randomuser.me/api";

  useEffect(()=>{
    const fetchData = async ()=> {
      try {
        const response = await fetch(apiUrl);
        const data = response.json();
        console.log(data);
      } catch (error) {
        console.log(error);
      }
    }
    fetchData();
  })

  return <AppContext.Provider  value={{"name":"me", "profession":"developer"}}>
    {children}
  </AppContext.Provider>
}

export const useGlobalContext = () => {
  return useContext(AppContext);
}

export { AppContext, AppProvider }