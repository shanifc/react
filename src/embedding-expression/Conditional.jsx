import React from 'react'

const Conditional = () => {
    const isLoggedIn = false;
  return (
    <div>
      <p>{isLoggedIn ? "Welcome back!" : "Please Sign in."}</p>
    </div>
  )
}

export default Conditional
