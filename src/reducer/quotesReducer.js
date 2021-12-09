import {FETCH_QUOTES_START, FETCH_QUOTES_SUCCESS, FETCH_QUOTES_FAIL} from "./../actions/index";
import { data } from "./../data/index";

const initialState = {
    quotes: data.map( quote => {
      return {
        id: quote.id,
        author: quote.title.rendered,
        quote: quote.content.rendered.replace(/<p>|<br>|<li>|<\/p>|<\/li>|\/n||\/>/ig, "").slice(0,-2),
      }
    } ),
    selected: {
      id: 2,
      author: "Lorem I. Dolor",
      quote: "Lorem ipsum dolor sept design."
    },
    isFetching: "",
    error: ""
  }

const reducer = (state=initialState, action) => {
    switch (action.type) {
        case FETCH_QUOTES_START:
          return({
            ...state,
            isFetching: true,
            error: ""
          });
        case FETCH_QUOTES_SUCCESS:
          return({
            ...state,
            quotes: action.payload.map( quote => {
              return {
                id: quote.id,
                author: quote.title.rendered,
                quote: quote.content.rendered.replace(/<p>|<br>|<li>|<\/p>|<\/li>|\/n||\/>/ig, "").slice(0,-2),
              }
            } ),
            selected: {
              id: action.payload[0].id,
              author: action.payload[0].title.rendered,
              quote: action.payload[0].content.rendered.replace(/<p>|<br>|<li>|<\/p>|<\/li>|\/n||\/>/ig, "").slice(0,-2),
            },
            isFetching: false,
            error: ""
          });
        case FETCH_QUOTES_FAIL:
          return({
            ...state,
            isFetching: false,
            error: action.payload
          });
              
        default:
            return state;
    }
};

export default reducer;