import axios from "axios";
import { GET_JOBS, GET_JOB, JOB_LOADING } from "./types";

//Get All Jobs

export const getAllJobs = () => async (dispatch) => {
  dispatch(setJobLoading());
  try {
    const res = await axios.get("/api/job/all");
    dispatch({
      type: GET_JOBS,
      payload: res.data,
    });
  } catch (err) {
    dispatch({
      type: GET_JOBS,
      payload: [],
    });
  }
};

//Get job by ID
export const getJobById = (id) => async (dispatch) => {
  dispatch(setJobLoading());
  try {
    const job = await axios.get(`/api/job/${id}`);
    dispatch({
      type: GET_JOB,
      payload: job.data,
    });
  } catch (err) {
    dispatch({
      type: GET_JOB,
      payload: null,
    });
  }
};

//update job content
export const updateJob = (id, newData) => async (dispatch) => {
  dispatch(setJobLoading());
  await axios.put(`/api/job/updatejob/${id}`, newData);
};
//set loading state
export const setJobLoading = () => {
  return {
    type: JOB_LOADING,
  };
};
