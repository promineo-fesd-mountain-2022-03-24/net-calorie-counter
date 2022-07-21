import Form from 'react-bootstrap/Form';
import { useState } from 'react';

export function SectionContainer(props) {

  const [formState, setFormState] = useState({
    day: props.date, 
    isIn: props.isIn,
    activity: '',
    amount: '',
  })

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
          {props.handleFormSubmit && (
            <Form onSubmit={(e) => props.handleFormSubmit(e, formState)}>
              <Form.Control
                type='text'
                placeholder='Activity'
                onChange={(e) => setFormState({...formState, activity: e.target.value})}
              />
              <Form.Control
                type='number'
                placeholder='Amount'
                onChange={(e) => setFormState({...formState, amount: Number(e.target.value)})}
              />
              <button type='submit'>Add</button>
            </Form>
          )}
        </div>
    </div>
  )
}
