import React from 'react';
// import Wheel from "./Wheel";

export default function Car(props) {
    return <>
        <h2>Hi, I am a Car! I have {props.numberOfWheels} wheels.</h2>
        { props.displayWheels(props.numberOfWheels) }
    </>
}