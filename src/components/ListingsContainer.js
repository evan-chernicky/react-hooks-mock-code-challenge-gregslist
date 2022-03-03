import React from "react";
import ListingCard from "./ListingCard";

function ListingsContainer({listings, filterValue}) {

  function handleListings() {

    const findListings = listings.map( (listing) => {
        return (
        <ListingCard 
        key={listing.id} 
        id={listing.id} 
        description={listing.description} 
        location={listing.location} 
        image={listing.image}/>)
    })
    .filter( (listing) => {

      const name = listing.props.description.toLowerCase();
      const location = listing.props.location.toLowerCase();


      return name.includes(filterValue.toLowerCase()) || location.includes(filterValue.toLowerCase())

    })

    return findListings

  }


  return (
    <main>
      <ul className="cards">
        {handleListings()}
      </ul>
    </main>
  );
}


export default ListingsContainer;
