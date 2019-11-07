import React, { createContext, useState, useEffect } from 'react';

export const DarkModeContext = createContext();

const DarkModeProvider = () => {
    const [darkMode, setDarkMode] = useState(true);

    return(
        <DarkModeContext.Provider> </DarkModeContext.Provider>
    )

}

export default DarkModeProvider;