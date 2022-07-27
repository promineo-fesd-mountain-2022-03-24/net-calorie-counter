const mockApiUrl = 'https://62cdee67a43bf7800860cefc.mockapi.io/calories'

export const getAllCalorieEntries = async (setFormattedData) => {
  const res = await fetch(mockApiUrl);
  const dataArray = await res.json();
  const tempFormattedData =  {}
  for (let data of dataArray) {
    if (data.day in tempFormattedData) {
      tempFormattedData[data.day].push(data)
    } else {
      tempFormattedData[data.day] = [data]
    }
  }
  setFormattedData(tempFormattedData)
}

export const createCalorieEntry = async (calorieEntry, setFormattedData) => {
  const res = await fetch(mockApiUrl, {
    headers: {'Content-Type': 'application/json'},
    method: 'POST',
    body: JSON.stringify(calorieEntry)
  })
  if (res.status === 201) {
    getAllCalorieEntries(setFormattedData)
  }
  else {
    // handle error
    console.log(res.statusText)
  }
}

export const getCalorieEntryById = async (calorieId) => {
  const res = await fetch(`${mockApiUrl}/${calorieId}`);
  if (res.status === 200) {
    const data = await res.json();
    return data
  } else {
    // handle error
    console.log(res.statusText)
    return null;
  }
}

export const updateCalorieEntry = async (calorieEntry) => {
  const res = await fetch(`${mockApiUrl}/${calorieEntry.id}`, {
    headers: {'Content-Type': 'application/json'},
    method: 'PUT',
    body: JSON.stringify(calorieEntry)
  })
  if (res.status === 200) {
    return true;
  } else {
    // handle error
    console.log(res.statusText)
    return null;
  }
}

export const deleteCalorieEntry = async (calorieId) => {
  const res = await fetch(`${mockApiUrl}/${calorieId}`, {
    method: 'DELETE'
  })
  if (res.status === 200) {
    return true;
  } else {
    // handle error
    console.log(res.statusText)
    return null;
  }
}
