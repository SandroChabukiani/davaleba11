import React from 'react';
import BookDisplay from './book';
import './App.css';

function App() {
  const handlePrintDetails = (title, characters) => {
    console.log('Book Title:', title);
    console.log('Characters:', characters);
  };
  const bookData = {
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSUUCD8MakMfFb05l3wThhm9GwOxLRlAIKYmg&usqp=CAU', // Replace with your image link
    title: 'Book',
    description: 'description',
    characters: ['1', '2', '3'],
  };
  return (
    <div className="App">
      <BookDisplay
        image={bookData.image}
        title={bookData.title}
        description={bookData.description}
        characters={bookData.characters}
        onClickFunction={handlePrintDetails}
      />
    </div>
  );
}
export default App;