import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Newsboard from './components/Newsboard';
import NewsItem from './components/NewsItem';
import { useState } from 'react';
function App() {
  const[category,setCategory]=useState("general")
  return (
    <div className="App">
      
      <Navbar setCategory={setCategory}/>
      <Newsboard category={category}/>
      <NewsItem/>
     
    </div>
  );
}

export default App;
