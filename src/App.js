import React from 'react';

import Kingsupport from './Support/Kingsupport';
import {Routes,Route,} from 'react-router-dom';
import Nike from './Nike/Nike';
import Adidas from './Adidas/Adidas';
import Sale from './Sale/Sale';
import Home from './Home/Home';
import Detail from './Support/Detail';
import Nikenam from './Nike/Nikenam';
import Nikenu from './Nike/Nikenu';
import Adidasnam from './Adidas/Adidasnam';
import Adidasnu from './Adidas/Adidasnu';
import Contact from './Contact/Contact';
import FormAdd from './Component1/FormAdd';
import Showdata from './Component1/Showdata';
import FormEdit from './Component1/FormEdit';
import Login from './Login/Login';
function App() {
  return (
    <div className="App">
     
      <Routes>
        <Route exact path='/' element={<Kingsupport/>}/>
        <Route exact path='/nike' element={<Nike/>}/>
        <Route exact path='/adidas' element={<Adidas/>}/>
        <Route exact path='/sale' element={<Sale/>}/>
        <Route exact path='/home' element={<Home/>}/>
        <Route exact path='/detail/:id' element={<Detail />} />
        <Route exact path='/nikenam' element={<Nikenam/>}/>
        <Route exact path='/nikenu' element={<Nikenu/>}/>
        <Route exact path='/adidasnam' element={<Adidasnam/>}/>
        <Route exact path='/adidasnu' element={<Adidasnu/>}/>
        <Route exact path='/contact' element={<Contact/>}/>
        <Route exact path='/add' element={<FormAdd/>}/>
        <Route exact path='/show' element={<Showdata/>}/>
        <Route exact path='/edit/:id' element={<FormEdit/>} />
        <Route exact path='/login' element={<Login/>}/>
      </Routes>
    </div>
  );
}

export default App;
