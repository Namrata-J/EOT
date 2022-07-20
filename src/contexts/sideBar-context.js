import { useState, createContext, useContext } from "react";

const sideBarContext = createContext({ display: "none" });

const SideBarProvider = ({ children }) => {

    const [sideBarLogoutPopupDisplay, setSideBarLogoutPopupDisplay] = useState("none");

    const handleSideBarLogoutPopupDisplay = () => {
        sideBarLogoutPopupDisplay === "none" ? setSideBarLogoutPopupDisplay("block") : setSideBarLogoutPopupDisplay("none")
    }

    return <sideBarContext.Provider value={{ sideBarLogoutPopupDisplay, handleSideBarLogoutPopupDisplay }}>
        {children}
    </sideBarContext.Provider>
}

const useSideBar = () => useContext(sideBarContext);

export { useSideBar, SideBarProvider };