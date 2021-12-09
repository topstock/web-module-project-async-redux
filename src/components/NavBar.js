import React from "react";

const NavBar = ()=> {
  const handleClick = (e) => {
      e.preventDefault();
  }

  return (
    <nav>
      <h1>Quotes from quotesondesign.com</h1>
      <button onClick={handleClick}>get new random quotes</button>
    </nav>
  )
}

export default NavBar