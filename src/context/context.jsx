import { createContext, useState } from "react";

export const navContext = createContext()

export const NavProvider = ({children}) => {
    const [active,setActive] = useState(false)
    return (
        <navContext.Provider value={{active,setActive}}>
            {children}
        </navContext.Provider>
    )
}