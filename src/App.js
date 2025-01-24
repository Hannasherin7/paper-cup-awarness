import logo from './logo.svg';
import './App.css';

import { BrowserRouter, Route, Router, Routes } from 'react-router-dom';
import Awareness from './Components/Awareness';
import Community from './Components/Community';
import Gamification from './Components/Gamification';
import ImpactTracker from './Components/ImpactTracker';
import Navbar from './Components/Navbar';
import HomePage from './Components/HomePage';


function App() {
  return (
<BrowserRouter>
<Routes>

  <Route path='/aw' element={<Awareness/>}/>
  <Route path='/community' element={<Community/>}/>
  <Route path='/gamification' element={<Gamification/>}/>
  <Route path='/impact' element={<ImpactTracker/>}/>
  <Route path='/' element={<Navbar/>}/>
  <Route path='/h' element={<HomePage/>}/>
  </Routes>
  

</BrowserRouter>
  );
}

export default App;
