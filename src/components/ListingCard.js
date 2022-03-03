import React, {useState} from "react";

function ListingCard({ id, description, image, location, removeListing}) {

  const [isFavorite, setIsFavorite] = useState(false)

  function setFavorite() {
    setIsFavorite(!isFavorite)
  }

  return (
    <li className="card">
      <div className="image">
        <span className="price">$0</span>
        <img src={image} alt={description} />
      </div>
      <div className="details">
        {isFavorite ? (
          <button onClick={() => setFavorite()} className="emoji-button favorite active">★</button>
        ) : (
          <button onClick={() => setFavorite()} className="emoji-button favorite">☆</button>
        )}
        <strong>{description}</strong>
        <span> · {location}</span>
        <button onClick={() => removeListing(id)} className="emoji-button delete">🗑</button>
      </div>
    </li>
  );
}

export default ListingCard;
