import React, { useState, createContext, useContext } from "react";

const headerContext = createContext({ display: 'null' });

const HeaderProvider = ({ children }) => {

    const [ hamburgerPopUpDisplay, setHamburgerPopUpDisplay ] = useState("none");

    const handleHamburgerDisplay = () => {
        hamburgerPopUpDisplay === "none"? setHamburgerPopUpDisplay("flex") : setHamburgerPopUpDisplay("none")
    }

    return <headerContext.Provider value={{ handleHamburgerDisplay, hamburgerPopUpDisplay }}>
        {children}
    </headerContext.Provider>
}

const useHeader = () => useContext(headerContext);

export { useHeader, HeaderProvider };