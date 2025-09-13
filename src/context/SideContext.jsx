import { Children, createContext, useState } from 'react'

export const sideContext = createContext();


const SideProvider = ({children}) => {
    const [open, setOpen] = useState(false);
    const closeOpen = () => {
        setOpen(!open);
    }
    return(
        <sideContext.Provider value={{open, closeOpen}}>
            {children}
        </sideContext.Provider>
    );
}

export default SideProvider;