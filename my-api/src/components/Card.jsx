import React from 'react';


export default function Card(props) {
  const {max, min, name, onClose, img, primary}= props;
  // acá va tu código
  return ( 
  <div>
  <button onClick={onClose}>X</button>
  <span >{name}</span>
  <Temp label="Min" temp={min}/>
  <Temp label="Max" temp={max}/>
  <img 
  src={`http://openweathermap.org/img/wn/${img}@2x.png`} 
  alt="Icono del clima"
  />
  </div>
  );
 }

 // mala practica ALERT
 // Esto deveria estar en un archivo 
 

  function Temp({Label, temp}){
     return(
      <div>
        <span>{Label}</span>
        <span>{temp}°</span>
      </div>
     );
   }

// class Card extends React.Component{
//   render (){
//     let{min, max, name, onClose, img} = this.props;
//     return (
//       <div>
//     <button onClick={this.props.onClase}>X</button>
//     <h4>{this.props.name}</h4>
//     <p>Min</p>
//     <p>{this.props.min}</p>
//     <p>Max</p>
//     <p>{this.props.max}</p>
//     <img src={`http://openweathermap.org/img/wn/${props.img}@2x.png`} alt="img"/>
//   </div>
//     )
//   }
// }

// export default Card;