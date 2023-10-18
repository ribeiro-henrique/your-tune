import { createContext, useState } from "react";

export const MyContext = createContext( );

// eslint-disable-next-line react/prop-types
export const MyProvider = ({ children }) => {
  const [ user, setUser ] = useState('');

  const contextValue = {
    user,
    setUser,
  }

  return (
    <MyContext.Provider value={ contextValue }>
      {children}
    </MyContext.Provider>
  )

}