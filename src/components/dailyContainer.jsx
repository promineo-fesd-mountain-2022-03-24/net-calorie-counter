import './dailyContainer.css';

export function DailyContainer(props) {
  console.log(props);
  return (
    <div className='container'>
      {props.value.day}
    </div>
  )
}
