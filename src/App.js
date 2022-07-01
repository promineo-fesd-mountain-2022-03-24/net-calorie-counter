import './App.css';
import { DailyContainer } from './components/dailyContainer';
import { NavBar } from './components/navbar';
import { dataArray } from './dummyData/net_calorie_data';

function App() {
  const data = dataArray;
  // console.log(data);
  return (
    <div className="App">
      <NavBar />
      {
        data.map((dataObj, i) => (
        <DailyContainer key={i} value={dataObj}/>
        ))
      }

    </div>
  );
}

export default App;
