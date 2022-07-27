import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { deleteCalorieEntry, getCalorieEntryById, updateCalorieEntry } from '../utils/fetchFunctions';
import { Button } from 'react-bootstrap';

export function EditContainer() {
  const {entryId} = useParams();
  const navigate = useNavigate();

  const [formState, setFormState] = useState({
    id: null,
    day: null,
    isIn: null,
    activity: '',
    amount: ''
  })

  useEffect(() => {
    if (entryId) {
      (async () => {
        const calorieEntry = await getCalorieEntryById(entryId)
        if (calorieEntry) {
          setFormState({
            id: calorieEntry.id,
            day: calorieEntry.day,
            isIn: calorieEntry.isIn,
            activity: calorieEntry.activity,
            amount: calorieEntry.amount
          })
        }
      })()
    }
  }, [entryId])

  const handleEditSubmit = (e) => {
    e.preventDefault();
    if (formState.id) {
      (async () => {
        const res = updateCalorieEntry(formState)
        if (res) {
          navigate('/')
        }
      })()
    }
  }

  const handleDeleteSubmit = (e) => {
    e.preventDefault();
    if (formState.id) {
      (async () => {
        const res = deleteCalorieEntry(formState.id);
        if (res) {
          navigate('/')
        }
      })()
    }
  }

  return (
    <>
      <div>
        <p>Type of activity: {formState.isIn === true ? 'Calorie In' : formState.isIn === false ? 'Calorie Out' : ''}</p>
        <p>Date: {formState.day}</p>
        <div style={{ margin: 8 }}>
          <label htmlFor='activity'>Activity: </label>
          <input
            type='text'
            name='activity'
            placeholder='Activity'
            value={formState.activity}
            onChange={(e) => setFormState({...formState, activity: e.target.value})}
          />
        </div>
        <div style={{ margin: 8 }}>
          <label htmlFor='amount'>Amount: </label>
          <input
            type='number'
            name='amount'
            placeholder='Amount'
            value={formState.amount}
            onChange={(e) => setFormState({...formState, amount: Number(e.target.value)})}
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
