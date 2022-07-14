const mockApiUrl = 'https://62cdee67a43bf7800860cefc.mockapi.io/calories'

// crud
// create, readAll
// TODO: readbyId, update, delete

export const getAllCalorieEntries = (setFormattedData) => {
  fetch(mockApiUrl)
    .then(res => res.json())
    .then(dataArray => {
      const innerState = {}
      for (let data of dataArray) {
        if (data.day in innerState) {
          innerState[data.day].push(data)
        } else {
          innerState[data.day] = [data]
        }
      }
      setFormattedData(innerState)
    })
    .catch(error => console.log(error))
}

export const createCalorieEntry = (calorieEntry, setFormattedData) => {
  fetch(mockApiUrl, {
    headers: {'Content-Type': 'application/json'},
    method: 'POST',
    body: JSON.stringify(calorieEntry)
  })
  .then(res=> res.json())
  .then(data => {
    console.log(data);
    getAllCalorieEntries(setFormattedData)
  })
  .catch(error => console.log(error))
}
