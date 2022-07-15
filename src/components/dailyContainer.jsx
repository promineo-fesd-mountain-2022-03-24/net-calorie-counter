import './dailyContainer.css';
import { useEffect, useState } from 'react';
import { SectionContainer } from './sectionContainer';

export function DailyContainer(props) {

  const [netCalories, setNetCalories] = useState(0);
  const [caloriesIn, setCaloriesIn] = useState([]);
  const [caloriesOut, setCaloriesOut] = useState([]);

  useEffect(() => {
    const cIn = [];
    const cOut = [];
    const netC = props.value[1].reduce((acc, val) => {
      if (val.isIn) {
        cIn.push(val)
        acc += val.amount
      }
      if (!val.isIn) {
        cOut.push(val)
        acc -= val.amount
      }
      return acc
    }, 0);

    setNetCalories(netC);
    setCaloriesIn(cIn);
    setCaloriesOut(cOut);
  }, [props])

  return (
    <div className='container'>
      <SectionContainer
        title='Calories In'
        data={caloriesIn}
        date={props.value[0]}
        isIn={true}
        handleFormSubmit={props.handleFormSubmit}
      />
      <SectionContainer
        title='Calories Out'
        data={caloriesOut}
        date={props.value[0]}
        isIn={false}
        handleFormSubmit={props.handleFormSubmit}
      />
      <SectionContainer
        title={`Date: ${props.value[0]}`}
        data={[]}
        netCalories={`Net Calories: ${netCalories}`}
      />
    </div>
  )
}
