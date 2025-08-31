import React, { useContext, useEffect } from 'react'

const AppContext = React.createContext();

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