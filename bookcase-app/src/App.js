import React, { useState } from 'react';
import Book from './components/Book';
import data from './models/books.json';

function App() {
  const state = useState(data);
  // console.log(state);
  // const books = state[0];
  const [books] = useState(data);
  console.log('books', books);

  // const setBooks = state[1];
  // console.log('setBooks', setBooks);

  return <Book/>;
}

export default App;

