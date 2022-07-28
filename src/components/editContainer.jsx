import { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { deleteCalorieEntry, getCalorieEntryById, updateCalorieEntry } from '../utils/fetchFunctions';
import { Button } from 'react-bootstrap';
import { useSelector, useDispatch } from 'react-redux';
import { updateFormState, updateActivity, updateAmount, resetFormState } from '../store/formSlice';

export function EditContainer() {
  const {entryId} = useParams();
  const navigate = useNavigate();

  const form = useSelector((state) => state.dayForm);
  const dispatch = useDispatch();

  useEffect(() => {
    if (entryId) {
      (async () => {
        const calorieEntry = await getCalorieEntryById(entryId)
        if (calorieEntry) {
          dispatch(updateFormState({
            id: calorieEntry.id,
            day: calorieEntry.day,
            isIn: calorieEntry.isIn,
            activity: calorieEntry.activity,
            amount: calorieEntry.amount
          }))
        }
      })()
    }
  }, [entryId, dispatch])

  const handleEditSubmit = (e) => {
    e.preventDefault();
    if (form.id) {
      (async () => {
        const res = updateCalorieEntry(form)
        if (res) {
          dispatch(resetFormState())
          navigate('/')
        }
      })()
    }
  }

  const handleDeleteSubmit = (e) => {
    e.preventDefault();
    if (form.id) {
      (async () => {
        const res = deleteCalorieEntry(form.id);
        if (res) {
          dispatch(resetFormState())
          navigate('/')
        }
      })()
    }
  }

  return (
    <>
      <div>
        <p>Type of activity: {form.isIn === true ? 'Calorie In' : form.isIn === false ? 'Calorie Out' : ''}</p>
        <p>Date: {form.day}</p>
        <div style={{ margin: 8 }}>
          <label htmlFor='activity'>Activity: </label>
          <input
            type='text'
            name='activity'
            placeholder='Activity'
            value={form.activity ?? ''}
            onChange={(e) => dispatch(updateActivity(e.target.value))}
          />
        </div>
        <div style={{ margin: 8 }}>
          <label htmlFor='amount'>Amount: </label>
          <input
            type='number'
            name='amount'
            placeholder='Amount'
            value={form.amount ?? ''}
            onChange={(e) => dispatch(updateAmount(Number(e.target.value)))}
          />
        </div>
        <div style={{ marginTop: 16, width: 450, display: 'flex', justifyContent: 'space-between'}}>
          <Button onClick={handleEditSubmit}>Submit Edit</Button>
          <Button onClick={handleDeleteSubmit} variant='danger'>Delete Calorie Entry</Button>
        </div>
      </div>
    </>
  )
}
