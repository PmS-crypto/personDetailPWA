// App.js
import './App.css'
import {useState} from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import PersonDetail from './components/PersonDetail';
import PersonAdd from './components/PersonAdd';

const App = () => {

    const [inputData, setInputData] = useState({
      name: "",
      email: ""
    })

    function handleChange(e) {
      setInputData({...inputData,[e.target.name]:e.target.value})
    }

    return (
      <div className="App">
        <input type="text" name="name" value={inputData.name} placeholder="Enter name" onChange={handleChange}/>
        <input type="text" name="email" value={inputData.email} placeholder="Enter email" onChange={handleChange} />
      </div>
    )
};

export default App;
