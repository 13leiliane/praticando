import React from 'react';
import Card from './Card.jsx';
// import styles from "./Cards.module.css";

// export default function Cards({cities}) SE USO EL cities. NO NECESARIO USAR EL props.alfo.. {
 export default function Cards({cities}) {
//   // acá va tu código
//   // tip, podés usar un map
console.log(cities);
 return (
    <div>
   {cities.map((city) => 
     <Card 
     key={city.name}
    max={city.main.temp_max}
    min={city.main.temp_min}
    name={city.name}
    img={city.weather[0].icon}
    onClose={() => alert(city.name)}  
    />)}
  </div>)
 };

// class Cards extends React.Component{
//   render (){
//     return (
    
// }
// export default Cards;