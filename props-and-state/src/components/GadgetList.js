import React from 'react';
import '../mystyles.css'

const GadgetList = (props) => {
  return (
    <main>
      <h2>Headphones</h2>
      {
        props.items.map((item) => (
          <React.Fragment key={item.key}>
            <div className='title'>{item.title}</div>
            <img src={item.src} alt={item.title} />
            <div className='price'>£{item.price}</div>
          </React.Fragment>
        ))
      }
    </main>
  );
}

export default GadgetList;
