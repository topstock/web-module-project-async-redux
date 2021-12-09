import React from 'react';
import { connect } from 'react-redux';

const AuthorList = (props) => {
  return (
    <div className='authors'>
      <h3>Select a Random Quote by Author Name</h3>
      { props.quotes.map( quote => {
        return  <p key={quote.id}><span >{quote.author}</span></p>
      })}
    
    </div>
  )
}

const mapStateToProps = (state) => {
  return ({
      quotes: state.quotes
  })
}

export default connect(mapStateToProps)(AuthorList);