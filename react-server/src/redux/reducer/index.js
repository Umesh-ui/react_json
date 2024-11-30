import { ADD_STREAM, DELETE_STREAM, GET_STREAMS, EDIT_STREAM, LOADING_STREAMS } from "../action";

const initialState = {
  streamList: [],
  loading: false,
};

export const streamReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOADING_STREAMS:
      return {
        ...state,
        loading: action.payload,
      };

    case GET_STREAMS:
      return {
        ...state,
        streamList: action.payload,
        loading: false,
      };

    case ADD_STREAM:
      return {
        ...state,
        streamList: [...state.streamList, action.payload], // Add new stream to list
      };

    case EDIT_STREAM:
      return {
        ...state,
        streamList: state.streamList.map((stream) =>
          stream.id === action.payload.id ? action.payload : stream
        ),
      };

    case DELETE_STREAM:
      return {
        ...state,
        streamList: state.streamList.filter((stream) => stream.id !== action.payload),
      };

    default:
      return state;
  }
};
