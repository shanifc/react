import React from 'react';

function Child({ onButtonClick }) {
  return (
    <button onClick={onButtonClick}>Click me</button>
  );
}

function Parent() {
  //  user callback function
  const handleChildClick = () => {
    alert("Child button clicked!");
  };

  return (
    <div>
      <h2>userCallback </h2>
      {/* callback function in passing to child component */}
      <Child onButtonClick={handleChildClick} />
    </div>
  );
}

export default Parent;