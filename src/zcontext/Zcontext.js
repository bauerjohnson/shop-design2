import React, {useContext, useState} from "react";


const AllContext = React.createContext();

const AllContextupdate = React.createContext();


export function Usefirst() {
    return useContext(AllContext)
}

export function UseSecond() {
    return useContext(AllContextupdate)
}


 export function ZcontextProvider ({children}) {
    const [update, setupdate] = useState(false)

    function togglethem () {
        setupdate(true)
    }



return (
   <AllContext.Provider value={update}>
<AllContextupdate.Provider value={togglethem}>
    {children}
</AllContextupdate.Provider>
  </AllContext.Provider>
)
 }

