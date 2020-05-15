import React, { useState, useEffect } from "react";
import "./App.css";
import axios from "axios"
import Header from "./components/Header";
import SearchBar from "./components/SearchBar";
import Character from "./components/Character";
import MyPagination from "./components/MyPagination";

const App = () => {

  const [rmData, setrmData] = useState([]);
  const [activeIndex, setActiveIndex] = useState(0);
  const [animating, setAnimating] = useState(false);
  const [currentPageNum, setcurrentPageNum] = useState(1);
  const [searchTerm, setSearchTerm] = useState('')
  
  const getData = (u) => {
    axios.get(u)
    .then( data => {
      setrmData(data.data.results)
    })
    
    .catch( error => {
      console.log(error);
      debugger
    })
  }

  useEffect(() => { getData("https://rickandmortyapi.com/api/character/") },[]);

  return (
    <div className="App">
      <div className="wrapper">
        <Header/>
        <div className="innerWrapper">
          <SearchBar updateSearchTerm={setSearchTerm}/>
          <Character rmData={rmData} activeIndex={activeIndex} setActiveIndex={setActiveIndex} animating={animating} setAnimating={setAnimating}/>
        </div>
        <div className="page">
          <MyPagination getData={getData} currentPageNum={currentPageNum} setcurrentPageNum={setcurrentPageNum}/>
        </div>
      </div>
    </div>
  );
}

export default App;
