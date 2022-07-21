import { useEffect, useState } from 'react';
import './App.css';
import { DailyContainer } from './components/dailyContainer';
import { NavBar } from './components/navbar';
import { DailyForm } from './components/dailyForm';
import { dataArray } from './dummyData/net_calorie_data';
// import { getAllCalorieEntries, createCalorieEntry } from './utils/fetchFunctions';

function App() {
  const [formattedData, setFormattedData] = useState({});
  
  useEffect(() => {
    const innerState = {}
    for (let data of dataArray) {
      if(data.day in innerState) {
        innerState[data.day].push(data);
      } else {
        innerState[data.day] = [data]
      }
    }
    setFormattedData(innerState)
    
    // getAllCalorieEntries(setFormattedData)
  }, [])

  const handleFormSubmit = (e, formState, formType) => {
    e.preventDefault();
    
    if (formType === 'daily') {
      setFormattedData({...formattedData, [formState.day]: [formState]})
    }
    if (formType === 'section') {
      setFormattedData({...formattedData, [formState.day]: [...formattedData[formState.day], formState]})
    }

    // createCalorieEntry(formState, setFormattedData)
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

export default App;
