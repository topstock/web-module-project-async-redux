import {REQUEST_LIST} from '../actions/index';
import { data } from './../data/index';

const initialState = {
    quotes: data.map( quote => {
      return {
        id: quote.id,
        author: quote.title.rendered,
        quote: quote.content.rendered.replace(/<p>|<br>|<li>|<\/p>|<\/li>|\/n||\/>/ig, '').slice(0,-2),
      }
    } ),
    selected: {
      id: 2,
      author: 'Lorem I. Dolor',
      quote: 'Lorem ipsum dolor sept design.'
    }
  }

const reducer = (state=initialState, action) => {
    switch (action.type) {
        // case REQUEST_LIST:
        //     return ({
              
        //     })
        default:
            return state
    }
};

export default reducer;