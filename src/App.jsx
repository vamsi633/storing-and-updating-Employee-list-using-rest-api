import { useState } from 'react'
import './App.css'
import { BrowserRouter,Route,Routes } from 'react-router-dom';
import Emplisting from './Emplisting';
import EmpCreate from './EmpCreate';
import EmpEdit from './EmpEdit';
import EmpDetail from './EmpDetail';
function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
     <h2>React JS CRUD Operation</h2>
     <BrowserRouter>
      <Routes>
       <Route path='/' element={<Emplisting />}></Route>
        <Route path='/employee/create' element={<EmpCreate />}></Route>
        <Route path='/employee/detail/:empid' element={<EmpDetail />}></Route>
        <Route path='/employee/edit/:empid' element={<EmpEdit />}></Route>
      </Routes>
  </BrowserRouter>
    </div>
  );

  
}

export default App
