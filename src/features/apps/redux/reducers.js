import TYPES from "./types";

const initialState = {
  data: [],
  isError: false
};

const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case TYPES.FETCH_DATA_SUCCESS: {
      return {
        ...state,
        data: payload.data
      };
    }
    case TYPES.FETCH_DATA_FAILURE: {
      return {
        ...state,
        isError: true
      };
    }
    default:
      return state;
  }
};

export default reducer;
