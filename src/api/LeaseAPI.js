const fetchLeasesByProperty = (propertyID) => {
  return fetch(`https://cors-anywhere.herokuapp.com/https://rocky-dusk-88419.herokuapp.com/properties/${propertyID}/leases`)
    .then((response) => response.json());
}

export default {
  fetchLeasesByProperty: fetchLeasesByProperty
}