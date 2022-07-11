
export function SectionContainer(props) {

  return (
    <div style={{border: '1px solid blue', width: '33%'}}>
      <h6 style={{marginTop: '8px'}}>{props.title}</h6>
        <ul>
        {
          props.data && (
            props.data.map((row, i)=> (
              <li key={i}>
              <span style={{marginRight: 16}}>Activity: {row.activity}</span>
              <span>Amount: {row.amount}</span>
            </li>
          ))
          )
        }
        </ul>
        {
          props.netCalories && (
            <div>{props.netCalories}</div>
          )
        }
        <div>
          {props.shouldAllowInput && (
            <>
            <input placeholder='Input Activity' />
            {/* TODO: this value should only be a number */}
            <input placeholder='Input Amount' />
            </>
          )}
        </div>
    </div>
  )
}
