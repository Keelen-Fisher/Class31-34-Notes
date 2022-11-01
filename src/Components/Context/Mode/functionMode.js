import React, { useState } from "react";

// create our instance of CreateContext
// this exists so we can use it to consume provided content
export const ModeContext = React.createContext();

function ModeProvider ({children}){
  
  const [mode, setmode] = useState('dark');
    
  
    return(
      <ModeContext.Provider value={{mode}}>
        {children}
      </ModeContext.Provider>

    )
}


export default ModeProvider
