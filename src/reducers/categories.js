import { FETCH_CATEGORIES_SUCCESS } from "../actions";

export const categoriesById = (state = {}, action) => {
  switch (action.type) {
    case FETCH_CATEGORIES_SUCCESS:
      return action.response;
    default:
      return state;
  }
};

export const categoriesIds = (state = [], action) => {
  switch (action.type) {
    case FETCH_CATEGORIES_SUCCESS:
      return action.response.forEach(cat => cat.id);
    default:
      return state;
  }
};
