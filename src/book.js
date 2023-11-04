import React from 'react';

const BookDisplay = ({ image, title, description, characters, onClickFunction }) => {
  const handleClick = () => {
    onClickFunction(title, characters);
  };

  return (
    <div>
      <img src={image} alt={title} />
      <h2>{title}</h2>
      <p>{description}</p>
      <p>Characters: {characters.join(', ')}</p>
      <button onClick={handleClick}>Print</button>
    </div>
  );
};

export default BookDisplay;