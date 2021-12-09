import React from "react";
import "./App.css";

import NavBar from "./components/NavBar";
import AuthorList from "./components/AuthorList";
import SelectedQuote from "./components/SelectedQuote";

import {connect} from "react-redux";

function App() {

  return (
    <div className="App">
      <NavBar />
      <section className="quotes">
        <SelectedQuote />
        <AuthorList />
      </section>

    </div>
  );
}

export default App;