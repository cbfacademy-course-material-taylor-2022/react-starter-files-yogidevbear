import React from 'react';

export default function Truck(props) {
    return <>
        <h2>Hola, I am a Truck! I have {props.numberOfWheels} wheels.</h2>
        { props.displayWheels(props.numberOfWheels) }
    </>
}