import { createContext, useState, useEffect } from "react";

const MatchsCityContext = createContext();

export function MatchsCity({ children }) {
  const [cityMatched, setCityMatched] = useState("");
  return (
    <MatchsCityContext.Provider value={{ setCityMatched, cityMatched }}>
      {children}
    </MatchsCityContext.Provider>
  );
}

export default MatchsCityContext;
