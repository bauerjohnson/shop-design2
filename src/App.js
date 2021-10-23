import React from "react";
import Showcase from "./Component/images/Showcase";
import Header from "./Component/Layout/Header";
import { ZcontextProvider } from "./zcontext/Zcontext";
// import Smallimage from './Component/images/Smallimages';


function App() {


  return (
    <ZcontextProvider>
     <Header/>
    <main>
      <Showcase/>
      
     </main>
     </ZcontextProvider>
    
  );
}

export default App;
