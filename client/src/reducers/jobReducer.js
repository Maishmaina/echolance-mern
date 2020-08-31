import { GET_JOBS, JOB_LOADING, GET_JOB } from "../actions/types";

const initialState = {
  jobs: [],
  job: null,
  loadingjob: false,
};
export default function (state = initialState, action) {
  switch (action.type) {
    case JOB_LOADING:
      return {
        ...state,
        loadingjob: true,
      };
    case GET_JOBS:
      return {
        ...state,
        jobs: action.payload,
        loadingjob: false,
      };
    case GET_JOB:
      return {
        ...state,
        job: action.payload,
        loadingjob: false,
      };

    default:
      return state;
  }
}
