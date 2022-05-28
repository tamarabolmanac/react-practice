import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import About from './components/About';
import Unit1 from './components/Unit1'
import Gramar1 from './components/Gramar1';
import { useState } from 'react'


function App() {

  const  [done, setDone] = useState(true)

  const handleChange = () => {
    if (window.confirm('Are you sure about this? :D')) {
      setDone(!done)
    }
  }


  return (
    <div className="App">

      <Router>
        <div>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/unit1">Unit 1</Link>
            </li>
          </ul>

          <hr />

          <Routes>
            <Route exact path="/" element={<p>Test</p>}/>
            <Route exact path="/about" element={<About/>}/>
            <Route exact path="/unit1" element={<Unit1/>}/>
            <Route exact path="/gramar/1" element={<Gramar1 done={done} handleChange={handleChange}/>}/>
            <Route exact path="/vocabulary/1" element={<p>Test</p>}/>
            <Route exact path="/speaking/1" element={<p>Test</p>}/>
            <Route exact path="/writing/1" element={<p>Test</p>}/>
          </Routes>
        </div>
      </Router>   
    </div>
  );
}

export default App;
