import './dailyContainer.css';
import { useEffect, useState } from 'react';
import { SectionContainer } from './sectionContainer';

export function DailyContainer(props) {

  const [netCalories, setNetCalories] = useState(0)

  useEffect(() => {

    const caloriesInTotal = props.value.caloriesIn.reduce((accumulator, currentValue) => {
      return accumulator += currentValue.amount
    }, 0)

    const caloriesOutTotal = props.value.caloriesOut.reduce((acc, val) => {
      return acc += val.amount
    }, 0)
    setNetCalories(caloriesInTotal - caloriesOutTotal);

  },[netCalories, props])

  return (
    <div className='container'>
      <SectionContainer title='Calories In' data={props.value.caloriesIn} shouldAllowInput={true} />
      <SectionContainer title='Calories Out' data={props.value.caloriesOut} shouldAllowInput={true} />
      <SectionContainer title={`Date: ${props.value.day}`} data={[]} netCalories={`Net Calories: ${netCalories}`}/>
    </div>
  )
}
