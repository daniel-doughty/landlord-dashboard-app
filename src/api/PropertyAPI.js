const fetchPropertyByID = (propertyID) => {
  return fetch(`https://cors-anywhere.herokuapp.com/https://rocky-dusk-88419.herokuapp.com/properties/${propertyID}`)
    .then((response) => response.json());
}

const fetchProperties = () => {
  return fetch(`https://cors-anywhere.herokuapp.com/https://rocky-dusk-88419.herokuapp.com/properties`)
    .then((response) => response.json());
}

const addProperty = (propertyObject) => {
  return fetch('https://cors-anywhere.herokuapp.com/https://rocky-dusk-88419.herokuapp.com/properties', {
    headers: {
      'Content-Type': 'application/json'
    },
    method: 'POST',
    body: JSON.stringify(propertyObject)
  })
  .then((response) => response.json());
}

const deleteProperty = (propertyID) => {
  return fetch(`https://cors-anywhere.herokuapp.com/https://rocky-dusk-88419.herokuapp.com/properties/${propertyID}`, {
    headers: {
      'Content-Type': 'application/json'
    },
    method: 'DELETE',
  })
  .then((response) => response.json());
}


export default {

  fetchPropertyByID: fetchPropertyByID,
  fetchProperties: fetchProperties,
  addProperty: addProperty,
  deleteProperty: deleteProperty
}