import Form from 'react-bootstrap/Form';
import { useState } from 'react';
import { Button } from 'react-bootstrap'
import { Link } from 'react-router-dom';
import './sectionContainer.css';
import PropTypes from 'prop-types';

export function SectionContainer(props) {

  const [formState, setFormState] = useState({
    day: props.date,
    isIn: props.isIn,
    activity: '',
    amount: '',
  })

  return (
    <div className='card bg-dark' style={{ width: '33%'}}>
      <h6 className='title'>{props.title}</h6>
        <div>
        {
          props.data && (
            props.data.map((row, i)=> (
              <div key={i}>
              <span className='text'>Activity: {row.activity}</span>
              <span className='text'>Amount: {row.amount}</span>
              <Link to={`entry/${row.id}`}>
                <Button>
                  <i className="bi bi-gear" />
                </Button>
              </Link>
            </div>
          ))
          )
        }
        </div>
        {
          props.netCalories && (
            <div>{props.netCalories}</div>
          )
        }
        <div>
          {props.handleFormSubmit && (
            <Form onSubmit={(e) => props.handleFormSubmit(e, formState)}>
              <Form.Control
                className='input'
                type='text'
                placeholder='Activity'
                onChange={(e) => setFormState({...formState, activity: e.target.value})}
              />
              <Form.Control
                className='input'
                type='number'
                placeholder='Amount'
                onChange={(e) => setFormState({...formState, amount: Number(e.target.value)})}
              />
              <button className='addButton' type='submit'>Add</button>
            </Form>
          )}
        </div>
    </div>
  )
}

SectionContainer.propTypes = {
  title: PropTypes.string,
  data: PropTypes.array,
  handleFormSubmit: PropTypes.func,
  date: PropTypes.string,
  isIn: PropTypes.bool,
  netCalories: PropTypes.string
}