import React from 'react';


 export default function SearchBar({onSearch}) {
  // acá va tu código
  const handleOnSearch  = () =>
onSearch(document.getElementById("searchInput").value);
   return (
  <div>
  <input id="searchIpunt" placeholder="City"/>
  <button onClick={handleOnSearch}>Agregar</button>
</div>
  )
};


// class SearchBar extends React.Component{
//   render (){
//     return (
//  <div>
//     <input type="text" placeholder="City"/>
//     <button onClick={this.props.onSearch("Buscando...")}>Agregar</button>
//   </div>
//     )
//   }
// }

// export default SearchBar; 