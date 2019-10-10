import React from 'react';
import './Search.css';


const search = () => {


  return (
    <div className="searchContainer">
      <h3> Find Recipes. Stay Healthy.</h3>
      <p>Eat what your body needs.</p>
      <div className-="searchCore">
        <input className="searchInput" placeholder="Gluten free recipes..."></input>
        <button className="primaryButton">Search</button>
      </div>
    </div>
  )
}

export default search;
