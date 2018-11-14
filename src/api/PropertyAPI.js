const fetchPropertyByID = (propertyID) => {
  return fetch(`https://cors-anywhere.herokuapp.com/https://rocky-dusk-88419.herokuapp.com/properties/${propertyID}`)
    .then((response) => response.json());
}

const fetchProperties = () => {
  return fetch(`https://cors-anywhere.herokuapp.com/https://rocky-dusk-88419.herokuapp.com/properties`)
    .then((response) => response.json());
}

export default {
  fetchPropertyByID: fetchPropertyByID,
  fetchProperties: fetchProperties
}