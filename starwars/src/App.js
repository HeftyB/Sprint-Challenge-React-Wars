import React, { useState, useEffect } from 'react';
import './App.css';
import axios from 'axios'
import Header from "./components/Header";
import SearchBar from "./components/SearchBar";
import Character from './components/Character';

const App = () => {

  const [rmData, setrmData] = useState([]);
  const [activeIndex, setActiveIndex] = useState(0);
  const [animating, setAnimating] = useState(false);
  
  const getData = () => {
    axios.get("https://rickandmortyapi.com/api/character/")
    .then( data => {
      setrmData(data.data.results)
    })

    .catch( error => {
      console.log(error);
      debugger
    })
  }

  useEffect(() => { getData() },[]);


  return (
    <div className="App">
      <div className="wrapper">
        <Header/>
        <div className="innerWrapper">
          <SearchBar/>
          <Character rmData={rmData} activeIndex={activeIndex} setActiveIndex={setActiveIndex} animating={animating} setAnimating={setAnimating}/>
        </div>
      </div>
    </div>
  );

}

export default App;
