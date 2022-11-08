import React from 'react';
import ReactDOM from 'react-dom/client';

const myName = 'Andrew'
const name = 'aNdReW';

function Profile(name){
  if (name.toUpperCase() === myName.toUpperCase()) {
    return <main id="content" role="main" className="base">
             <h1>{name}'s React Page</h1>
             <p>[Your short bio goes here]</p>
           </main>
  } else {
    return <main id="content" role="main" className="base">
             <h1>Just a React Page</h1>
             <p>Nothing to see here!</p>
           </main>
  }
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(Profile(name));

