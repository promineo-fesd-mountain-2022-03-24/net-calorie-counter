import { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { deleteCalorieEntry, getCalorieEntryById, updateCalorieEntry } from '../utils/fetchFunctions';
import { Button } from 'react-bootstrap';
import { FormContext } from '../App';
import { useContext } from 'react';

export function EditContainer() {
  const {entryId} = useParams();
  const navigate = useNavigate();

  const {formValues, setFormValues} = useContext(FormContext);

  useEffect(() => {
    (async () => {
      const calorieEntry = await getCalorieEntryById(entryId)
      if (calorieEntry) {
        setFormValues({
          id: calorieEntry.id,
          day: calorieEntry.day,
          isIn: calorieEntry.isIn,
          activity: calorieEntry.activity,
          amount: calorieEntry.amount
        })
      }
    })()
    // empty dependency array to prevent infinite loop when calling a setState inside a useEffect
  }, [])

  const handleEditSubmit = (e) => {
    e.preventDefault();
    if (formValues.id) {
      (async () => {
        const res = updateCalorieEntry(formValues)
        if (res) {
          navigate('/')
        }
      })()
    }
  }

  const handleDeleteSubmit = (e) => {
    e.preventDefault();
    if (formValues.id) {
      (async () => {
        const res = deleteCalorieEntry(formValues.id);
        if (res) {
          navigate('/')
        }
      })()
    }
  }

  return (
    <>
      <div>
        <p>Type of activity: {formValues.isIn === true ? 'Calorie In' : formValues.isIn === false ? 'Calorie Out' : ''}</p>
        <p>Date: {formValues.day}</p>
        <div style={{ margin: 8 }}>
          <label htmlFor='activity'>Activity: </label>
          <input
            type='text'
            name='activity'
            placeholder='Activity'
            value={formValues.activity}
            onChange={(e) => setFormValues({...formValues, activity: e.target.value})}
          />
        </div>
        <div style={{ margin: 8 }}>
          <label htmlFor='amount'>Amount: </label>
          <input
            type='number'
            name='amount'
            placeholder='Amount'
            value={formValues.amount}
            onChange={(e) => setFormValues({...formValues, amount: Number(e.target.value)})}
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
