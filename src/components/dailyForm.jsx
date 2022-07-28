import Form from 'react-bootstrap/Form'
import { useDispatch, useSelector } from 'react-redux';
import { resetFormState, updateActivity, updateAmount, updateDay, updateIsIn } from '../store/formSlice';
import { useEffect } from 'react';

export function DailyForm(props) {

  const form = useSelector((state) => state.dayForm);
  const dispatch = useDispatch();

  useEffect(() => {
    // this initializes the isIn radio on component mount
    if (form.isIn === null) {
      dispatch(updateIsIn(true))
    }
  }, [dispatch, form])

  const changeRadioSelection = (e) => {
    dispatch(updateIsIn(e.target.value === 'true'))
  }

  const submitForm = (e) => {
    props.handleFormSubmit(e, form);
    dispatch(resetFormState())
  }

  return (
    <Form onSubmit={submitForm}>
      <div style={{display: 'flex'}}>
        <Form.Check
          type='radio'
          label='Calories In'
          inline
          name='inOutSelector'
          value={true}
          onChange={changeRadioSelection}
          checked={form.isIn === true}
        />
        <Form.Check
          type='radio'
          label='Calories Out'
          inline
          name='inOutSelector'
          value={false}
          onChange={changeRadioSelection}
          checked={form.isIn === false}
        />
      </div>
      <Form.Control
        type='text'
        placeholder='Activity'
        value={form.activity ?? ''}
        onChange={(e) => dispatch(updateActivity(e.target.value))}
      />
      <Form.Control
        type='number'
        placeholder='Amount'
        value={form.amount ?? ''}
        onChange={(e) => dispatch(updateAmount(Number(e.target.value)))}
      />
      <Form.Control
        type='date'
        value={form.day ?? ''}
        onChange={(e) => dispatch(updateDay(e.target.value))}
      />
      <button type='submit'>Confirm</button>
    </Form>
  )
}
