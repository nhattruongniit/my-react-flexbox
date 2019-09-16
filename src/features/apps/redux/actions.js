import TYPES from "./types";
import { apiFetchProjects } from "../api";

const actionTypes = (type, payload) => {
  return {
    type,
    payload
  };
};

// Actions
export const actFetchProjects = () => async dispatch => {
  try {
    const { data } = await apiFetchProjects();
    dispatch(
      actionTypes(TYPES.FETCH_DATA_SUCCESS, {
        data,
        isError: false
      })
    );
  } catch (err) {
    dispatch(
      actionTypes(TYPES.FETCH_DATA_FAILURE, {
        data: err.response || [],
        isError: true
      })
    );
  }
};
