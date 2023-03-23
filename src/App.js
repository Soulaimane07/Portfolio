import './App.css';
import './AppR.css';

import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Nav from './pages/nav/Nav';
import Home from './pages/home/Home';
import Social from './pages/social/Social';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Nav />
        <Routes>
          <Route path='/' element={<Home />}></Route>
        </Routes>
        <Social />
      </BrowserRouter>
    </div>
  );
}

export default App;
