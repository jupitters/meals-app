import React, { useContext } from 'react'

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  return <AppContext.Provider  value=''>
    {children}
  </AppContext.Provider>
}

export { AppContext, AppProvider }