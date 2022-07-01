import './dailyContainer.css';

export function DailyContainer(props) {
  return (
    <div className='container'>
      {props.value.day}
    </div>
  )
}
