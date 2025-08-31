import React, { useContext, useEffect } from 'react'

const AppContext = React.createContext();

const AppProvider = ({ children }) => {

  useEffect(async ()=>{
    console.log("data here");
  },[])

  return <AppContext.Provider  value={{"name":"me", "profession":"developer"}}>
    {children}
  </AppContext.Provider>
}

export const useGlobalContext = () => {
  return useContext(AppContext);
}

export { AppContext, AppProvider }