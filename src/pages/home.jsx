import { useEffect } from "react";
import { useState } from "react"
import { getAllCalorieEntries, createCalorieEntry } from "../utils/fetchFunctions";
import { DailyContainer } from '../components/dailyContainer';
import { DailyForm } from '../components/dailyForm';

export const HomePage = () => {

  const [formattedData, setFormattedData] = useState({});

  useEffect(() => {
    getAllCalorieEntries(setFormattedData)
  }, [])


  const handleFormSubmit = (e, formState) => {
    e.preventDefault();
    createCalorieEntry(formState, setFormattedData)
  }

  return (
    <>
      {
        Object.entries(formattedData).map((dataObj, i) => (
          <DailyContainer key={i} value={dataObj} handleFormSubmit={handleFormSubmit}/>
          ))
      }
      <DailyForm
        handleFormSubmit={handleFormSubmit}
      />
    </>
  )
}