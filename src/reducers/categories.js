import { FETCH_CATEGORIES_SUCCESS } from "../actions/categories";

export const categories = (state = [], action) => {
  switch (action.type) {
    case FETCH_CATEGORIES_SUCCESS:
      return action.response.categories;
    default:
      return state;
  }
};
