import {useState} from 'react'
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './components/Home'
import About from './components/About'
import Details from './components/Details'
import Login from './components/Login'
import Navbar from "./components/Navbar";
import NotFound from './components/NotFound'
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  const [recipeLabel, setLabel]=useState('')
  const [loggedIn,setLoggedIn]=useState(false)

  const fetchRecipeLabel=(label)=>{
setLabel(label)
  }

  const checkIfLoggedIn=()=>{
setLoggedIn(true)
  }
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col">
            <Router>
              <Navbar loggedIn={loggedIn} checkLoggedIn={checkIfLoggedIn}/>
              <Routes>
                <Route path='/' element={<Home fetchRecipeLabel={fetchRecipeLabel}/>}/>
                <Route path='/about' element={<About />}/>
                <Route path='/details/:label' element={<Details recipeLabel={recipeLabel}/>}/>
                <Route path='/login' element={<Login />} checkIfLoggedIn={checkIfLoggedIn} />
                <Route path='*' element={<NotFound />}/>
              </Routes>
            </Router>
            
  
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
