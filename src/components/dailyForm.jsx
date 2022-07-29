import Form from 'react-bootstrap/Form'
import { useState } from 'react';

export function DailyForm(props) {

  const [formState, setFormState] = useState({
    day: '',
    isIn: true,
    activity: '',
    amount: '',
  })

  const changeRadioSelection = (e) => {
    // e.target.value is of type string 'true' | 'false'
    setFormState({...formState, isIn: (e.target.value === 'true')})
  }

  return (
    <Form onSubmit={(e) => props.handleFormSubmit(e, formState)}>
      <div style={{display: 'flex'}}>
        <Form.Check
          type='radio'
          label='Calories In'
          inline
          name='inOutSelector'
          value={true}
          onChange={changeRadioSelection}
          checked={formState.isIn === true}
        />
        <Form.Check
          type='radio'
          label='Calories Out'
          inline
          name='inOutSelector'
          value={false}
          onChange={changeRadioSelection}
          checked={formState.isIn === false}
        />
      </div>
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
      <Form.Control
        type='date'
        onChange={(e) => setFormState({...formState, day: e.target.value})}
      />
      <button type='submit'>Confirm</button>
    </Form>
  )
}
