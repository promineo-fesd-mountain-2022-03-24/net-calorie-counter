import './App.css';
import { createContext } from 'react';
import { NavBar } from './components/navbar';
import { Routes, Route } from 'react-router-dom';
import { HomePage } from './pages/home';
import { EditPage } from './pages/edit';
import { useState } from 'react';

export const FormContext = createContext({
  formValues: {},
  setFormValues: (_values) => {}
})

export default function App() {

  const [formValues, setFormValues] = useState({
    id: null,
    day: null,
    isIn: null,
    activity: null,
    amount: null,
  })

  return (
    <div className="App">
      <FormContext.Provider value={{formValues, setFormValues}}>
        <NavBar />
        <Routes>
          <Route path='/' element={ <HomePage />} />
          <Route path='entry/:entryId' element={ <EditPage /> } />
        </Routes>
      </FormContext.Provider>
    </div>
  );
}
