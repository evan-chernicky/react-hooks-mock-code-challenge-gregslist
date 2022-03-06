import React, {useEffect, useState} from "react";
import Header from "./Header";
import ListingsContainer from "./ListingsContainer";

function App() {

  const [filterValue, setFilterValue] = useState('')

  function setFilter(formValue) {

    setFilterValue(formValue)

  }

  const API = 'http://localhost:6001/listings'
  const [listings, setListings] = useState([])

  useEffect(() => {

    fetch(API)
    .then(resp => resp.json())
    .then(data => setListings(data))


  }, [])

  function removeListing(id) {

    const newListings = listings.filter(listing => {
      if (listing.id !== id) {
        return listing
      }      
    })

    setListings(newListings)



    fetch(`${API}/${id}`, {
      method: 'DELETE',
      headers: {
        'Content-type': 'application/json; charset=UTF-8' 
       },
    })

  }


  return (
    <div className="app">
      <Header onFilterClick={setFilter} />
      <ListingsContainer listings={listings} filterValue={filterValue} removeListing={removeListing}/>
    </div>
  );
}

export default App;
