import { useEffect, useState } from 'react';
import './App.css';
import { DailyContainer } from './components/dailyContainer';
import { NavBar } from './components/navbar';
import { DailyForm } from './components/dailyForm';
import { getAllCalorieEntries, createCalorieEntry } from './utils/fetchFunctions';

export default function App() {
  const [formattedData, setFormattedData] = useState({});
  
  useEffect(() => {
    getAllCalorieEntries(setFormattedData)
  }, [])

  const handleFormSubmit = (e, formState) => {
    e.preventDefault();
    createCalorieEntry(formState, setFormattedData)
  }

  return (
    <div className="App">
      <NavBar />
      {
        Object.entries(formattedData).map((dataObj, i) => (
        <DailyContainer key={i} value={dataObj} handleFormSubmit={handleFormSubmit}/>
        ))
      }
      <DailyForm
        handleFormSubmit={handleFormSubmit}
      />
    </div>
  );
}
