import React from 'react';
import './App.css';

const SearchBar  = ({handleInput}) => {
    return (
      <div>
          <input id='search'
                 onChange={handleInput}/>
      </div>
    )
}

export default SearchBar;
