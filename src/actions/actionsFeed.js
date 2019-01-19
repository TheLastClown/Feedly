/**
 * Feed actions
 */
import { getFeedData } from "../api/apiGetFeedData";

/* ============================================== */

export const actions = {
  FETCHING_DATA: "FETCHING_DATA",
  FETCHING_DATA_SUCCESS: "FETCHING_DATA_SUCCESS",
  FETCHING_DATA_ERROR: "FETCHING_DATA_ERROR"
};

/* ============================================== */

const getDataFetching = () => ({
  type: actions.FETCHING_DATA
});
const getDataFailure = error => ({
  type: actions.FETCHING_DATA_ERROR,
  payload: {
    error
  }
});
const getDataSuccess = data => ({
  type: actions.FETCHING_DATA_SUCCESS,
  payload: {
    data
  }
});

/* ============================================== */

export const getData = filter => (dispatch) => {
  dispatch(getDataFetching());
  getFeedData(filter)
    .then((resp) => {
      dispatch(getDataSuccess(resp[0].articles));
    })
    .catch(err => dispatch(getDataFailure(err)));
};
