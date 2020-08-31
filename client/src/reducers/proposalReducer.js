import {
  PROPOSAL_LOADING,
  GET_PROPOSALS,
  SET_LOADING_FALSE,
} from "../actions/types";

const initialState = {
  proposals: [],
  loadingproposal: false,
};
export default function (state = initialState, action) {
  switch (action.type) {
    case PROPOSAL_LOADING:
      return {
        ...state,
        loadingproposal: true,
      };
    case GET_PROPOSALS:
      return {
        ...state,
        proposals: action.payload,
        loadingproposal: false,
      };
    case SET_LOADING_FALSE:
      return {
        ...state,
        loadingproposal: false,
      };
    default:
      return state;
  }
}
