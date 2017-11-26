import { API_DOMAIN } from "./const";

export const FETCH_CATEGORIES_SUCCESS = "FETCH_CATEGORIES_SUCCESS";
export const FETCH_CATEGORIES_REQUEST = "FETCH_CATEGORIES_REQUEST";

export const fetchCategories = () => dispatch => {
  dispatch({ type: FETCH_CATEGORIES_REQUEST });
  fetch(`${API_DOMAIN}/categories`, {
    headers: { Authorization: "whatever-you-want" }
  })
    .then(b => b.json())
    .then(response => {
      dispatch({ type: FETCH_CATEGORIES_SUCCESS, response });
    });
};
