import './App.css';
import { DailyContainer } from './components/dailyContainer';
import { NavBar } from './components/navbar';
import { dataArray } from './dummyData/net_calorie_data';

function App() {
  const data = dataArray;
  // TODO: hold this data in state, so we can update/ manipulate it
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
