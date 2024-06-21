import React, { createContext, useState } from "react";

const TheatreAuthContext = createContext();

export const TheatreAuthProvider = ({ children }) => {
  const [isTheatreLoggedIn, setIsTheatreLoggedIn] = useState(false);

  return (
    <TheatreAuthContext.Provider value={{ isTheatreLoggedIn, setIsTheatreLoggedIn }}>
      {children}
    </TheatreAuthContext.Provider>
  );
};


export default TheatreAuthContext;
