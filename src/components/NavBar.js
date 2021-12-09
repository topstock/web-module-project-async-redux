import React from "react";
import { connect } from "react-redux";
import { fetchStart } from "../actions";

const NavBar = (props)=> {
  const handleClick = (e) => {
      e.preventDefault();
      props.fetchStart();
  }

  return (
    <nav>
      <h1>Quotes from quotesondesign.com</h1>
      <button onClick={handleClick}>get new random quotes</button>
    </nav>
  )
}

export default connect(null, {fetchStart})(NavBar);