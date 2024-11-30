import axios from "axios";

export const GET_STREAMS = "GET_STREAMS";
export const ADD_STREAM = "ADD_STREAM";
export const EDIT_STREAM = "EDIT_STREAM";
export const DELETE_STREAM = "DELETE_STREAM";
export const LOADING_STREAMS = "LOADING_STREAMS";

// Base URL for the JSON server
const BASE_URL = "http://localhost:3005/streams";

// Fetch all streams
export const getStreams = () => {
  return async (dispatch) => {
    dispatch({ type: LOADING_STREAMS, payload: true }); // Start loading
    try {
      const res = await axios.get(BASE_URL);
      if (res.status === 200) {
        dispatch({
          type: GET_STREAMS,
          payload: res.data,
        });
      }
    } catch (error) {
      console.error("Error fetching streams:", error);
    }
  };
};

// Add a new stream
export const addStream = (streamData) => {
  return async (dispatch) => {
    try {
      const res = await axios.post(BASE_URL, streamData);
      if (res.status === 201) {
        dispatch({
          type: ADD_STREAM,
          payload: res.data,
        });
        console.log("Stream added successfully!");
      }
    } catch (error) {
      console.error("Error adding stream:", error);
    }
  };
};

// Edit an existing stream
export const editStream = (id, updatedData, navigate) => {
  return async (dispatch) => {
    try {
      const res = await axios.put(`${BASE_URL}/${id}`, updatedData);
      if (res.status === 200) {
        dispatch({
          type: EDIT_STREAM,
          payload: res.data,
        });
        console.log("Stream updated successfully!");
        navigate(-1);
      }
    } catch (error) {
      console.error("Error updating stream:", error);
    }
  };
};

// Delete a stream
export const deleteStream = (id) => {
  return async (dispatch) => {
    try {
      const res = await axios.delete(`${BASE_URL}/${id}`);
      if (res.status === 200) {
        dispatch({
          type: DELETE_STREAM,
          payload: id,
        });
        console.log("Stream deleted successfully!");
      }
    } catch (error) {
      console.error("Error deleting stream:", error);
    }
  };
};
