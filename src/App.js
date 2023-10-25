
import './App.css';
import React, { Component } from 'react'
import Navbar from './components/Navbar';
import Youtube from './components/Youtube';





import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import About from './components/About';


export class App extends Component {
 
 
  render() {
    console.log("This is the render method")
    return (
      <>
       <Router basename={process.env.PUBLIC_URL}>
      <Navbar />
      

      <div className="container">
        <Routes>
          <Route exact path="/" element={<Youtube key="general"  category="general" />} />
          <Route exact path="/about" element={<About/>} />
          


          <Route exact path="/general" element={<Youtube key="general"  category="general"/>} />
          <Route exact path="/entertainment" element={<Youtube key="entertainment"  category="entertainment"/>}  />
          <Route exact path="/coding" element={<Youtube key="coding"  category="coding"/>}  />
           <Route exact path="/gaming" element={<Youtube key="gaming"  category="gaming"/>}  />
          <Route exact path="/movie" element={<Youtube key="movie"  category="movie"/>}  />
          <Route exact path="/sports" element={<Youtube key="sports"  category="sports"/>}  />
          <Route exact path="/technology" element={<Youtube key="technology"  category="technology"/>}  />
          <Route exact path="/funny" element={<Youtube key="funny"  category="funny"/>}  />
          <Route exact path="/news" element={<Youtube key="news"  category="news"/>}  />
          
        </Routes>
      </div>
    </Router>
        
      </>
    )
  }
}

export default App
