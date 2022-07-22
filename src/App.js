import { Route, Routes, Navigate } from 'react-router-dom';

import Start from "./pages/Start";

import Nav from "./layout/Nav";

import Launches from "./pages/Launches";
import Rockets from "./pages/Rockets";
import NotFound from "./pages/NotFound";


function App() {
  return (
  
    
      <Nav>
        <Routes>
        <Route path='/' element={<Navigate replace to='/Start' />} />
        <Route path='/Start' element={<Start/>} />
       
          <Route path="/Rockets" element={<Rockets/>} />
        
        <Route path='/Launches' element={<Launches/>} />
        <Route path='*' element={<NotFound />} />
             
      
        </Routes>
        </Nav>
   
 
  )
}

export default App;
