const fetchLeasesByProperty = (propertyID) => {
  return fetch(`https://cors-anywhere.herokuapp.com/https://rocky-dusk-88419.herokuapp.com/properties/${propertyID}/leases`)
    .then((response) => response.json());
}

const deleteLease = (propertyID, leaseID) => {
  return fetch(`https://cors-anywhere.herokuapp.com/https://rocky-dusk-88419.herokuapp.com/properties/${propertyID}/leases/${leaseID}`, {
    headers: {
      'Content-Type': 'application/json'
    },
    method: 'DELETE',
  })
  .then(() => console.log("deleted!!"));
}

export default {
  fetchLeasesByProperty: fetchLeasesByProperty,
  deleteLease: deleteLease
}