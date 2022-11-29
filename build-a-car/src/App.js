import './App.css';
import React from 'react'
import Car from './components/Car'
import Bicycle from './components/Bicycle'
import Truck from './components/Truck'
import Bus from './components/Bus'
import Skateboard from './components/Skateboard'
import Wheel from './components/Wheel';

export default function App() {
  
  const displayWheels = (numberOfWheels) => {
    // return [...Array(parseInt(numberOfWheels))].map((_,index) => {
    //   return <Wheel key={index} />
    // })
    const wheels = [];
    for (let wheel = 0; wheel < numberOfWheels; wheel++) {
      wheels.push(<Wheel key={wheel} />);
    }
    return wheels;
  }

  return (
    <div className='App'>
      <Car numberOfWheels="4" displayWheels={displayWheels} />
      <Bicycle numberOfWheels="2" displayWheels={displayWheels} />
      <Bus numberOfWheels="6" displayWheels={displayWheels} />
      <Truck numberOfWheels="8" displayWheels={displayWheels} />
      <Skateboard numberOfWheels="4" displayWheels={displayWheels} />
    </div>
  );
}
