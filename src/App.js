import { useEffect } from 'react';
import './App.css';
import './AppR.css';

import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Nav from './pages/nav/Nav';
import Home from './pages/home/Home';
import Social from './pages/social/Social';
import Works from './pages/works/Works';

function App() {

  useEffect(() => {
    document.title = 'Soulaimane Ouhmida';
  }, []);

  return (
    <div className="App">
      <BrowserRouter>
        <Nav />
        <Routes>
          <Route path='/works' element={<Works />}></Route>
          <Route exact path='/' element={<Home />}></Route>
        </Routes>
        <Social />
      </BrowserRouter>
    </div>
  );
}

export default App;
