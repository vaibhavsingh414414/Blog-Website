import React from 'react';
import Create from './Component/Create';
import { Routes,Route } from 'react-router-dom';
import Reader from "./Component/Reader";
import Edit from './Component/Edit';
function App() {
  return (
    <div className="container">
      <Routes>
        <Route path='/' element={<Reader />}></Route>
        <Route path='/Create' element={<Create />}> </Route>
        <Route path='/Edit' element={<Edit />}> </Route>
      </Routes>
    </div>
  )
}

export default App;
