import React from "react";
import { connect } from "react-redux";

const SelectedQuote = (props)=> {
  return (
    <div>
        <h2>Selected Quote</h2>
        <div className="selected">
          <p>{`${props.selected.quote}`}</p>
          <p>{`${props.selected.author}`}</p>
        </div>
    </div>
  )
}

const mapStateToProps = (state) => {
  return({
    selected: state.selected
  })
}

export default connect(mapStateToProps)(SelectedQuote)