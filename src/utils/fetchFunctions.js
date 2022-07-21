const mockApiUrl = 'https://62cdee67a43bf7800860cefc.mockapi.io/calories'

// crud
// create, readAll
// TODO: readbyId, update, delete

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
