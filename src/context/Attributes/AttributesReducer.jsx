import { GET_TYPES_DOCUMENTS, GET_PROCESSES } from "../types";
export const AttributesReducer = (state, action) => {
  const { type, payload } = action;
  switch (type) {
    case GET_TYPES_DOCUMENTS:
      return {
        ...state,
        typesDocuments: payload,
      };
    case GET_PROCESSES:
      return {
        ...state,
        processes: payload,
      }
    default:
      return state;
  }
};
