import axios from "axios";
import { updateJob } from "./jobActions";
import {
  PROPOSAL_LOADING,
  GET_PROPOSALS,
  GET_ERRORS,
  CLEAR_ERRORS,
  SET_LOADING_FALSE,
} from "./types";

// add a propposal
export const addNewProposal = (proposalData, history) => async (dispatch) => {
  dispatch(setProposalLoading());
  await axios.post("/api/proposal/add", proposalData);
  const newStatus = { status: "assigned" };
  dispatch(updateJob(proposalData.job, newStatus));
  history.push("/myaccount");
};

//get proposals by the user id
export const getProposalByUserId = (id) => async (dispatch) => {
  dispatch(setProposalLoading());
  try {
    const proposal = await axios.get(`/api/proposal/user/${id}`);
    dispatch({
      type: GET_PROPOSALS,
      payload: proposal.data,
    });
  } catch (err) {
    dispatch({
      type: GET_PROPOSALS,
      payload: [],
    });
  }
};
//update proposal
export const updateProposal = (id, newData) => async (dispatch) => {
  dispatch(setProposalLoading());
  await axios.put(`/api/proposal/updateproposal/${id}`, newData);
};

//Upload proposal result file
export const uploadProposalFile = (userId, id, fileData) => async (
  dispatch
) => {
  dispatch(setProposalLoading());
  try {
    await axios.put(`/api/proposal/file/${id}`, fileData);
    const newStatus = { status: "delivered" };
    dispatch(updateProposal(id, newStatus));
    dispatch(getProposalByUserId(userId));
  } catch (err) {
    dispatch({
      type: GET_ERRORS,
      payload: err.response.data,
    });
  }
};

//set loading state
export const setProposalLoading = () => {
  return {
    type: PROPOSAL_LOADING,
  };
};
//clear errors
export const clearErrors = () => {
  return {
    type: CLEAR_ERRORS,
  };
};
//set loading to false
export const setLoadingFalse = () => {
  return {
    type: SET_LOADING_FALSE,
  };
};
