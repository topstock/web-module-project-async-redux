import axios from 'axios';

export const FETCH_QUOTES_START = "FETCH_QUOTES_START";
export const FETCH_QUOTES_SUCCESS = "FETCH_QUOTES_SUCCESS";
export const FETCH_QUOTES_FAIL = "FETCH_QUOTES_FAIL";

export const fetchStart = () => dispatch => {
  dispatch({ type: FETCH_QUOTES_START });
  axios.get(`https://quotesondesign.com/wp-json/wp/v2/posts/?orderby=rand`)
    .then(res => {
      console.log(res);
      dispatch({ type: FETCH_QUOTES_SUCCESS, payload: res.data })
    })
    .catch(err => dispatch({ type: FETCH_QUOTES_FAIL, payload: err}))
}