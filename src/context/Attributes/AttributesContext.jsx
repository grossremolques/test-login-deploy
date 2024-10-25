import { createContext, useContext, useReducer } from "react";
import supabase from "../../services/supabaseClient";
import { AttributesReducer } from "./AttributesReducer";

const AttributesContext = createContext();
export const useAttributes = () => useContext(AttributesContext);

export const AttributesContextProvider = ({ children }) => {
  const initialState = {
    typesDocuments: [],
    processes: [],
    teams: [],
  };

  const [state, dispatch] = useReducer(AttributesReducer, initialState);

  const getAttributes = async ({ nameTable, columns, type }) => {
    const { error, data } = await supabase.from(nameTable).select(columns);
    dispatch({
      type: type,
      payload: data,
    });
  };
  const createTypeDocument = async () => {};
  const updateTypeDocument = async () => {};
  const deleteTypeDocument = async () => {};
  
  return (
    <AttributesContext.Provider
      value={{ typesDocuments: state.typesDocuments, processes: state.processes, getAttributes }}
    >
      {children}
    </AttributesContext.Provider>
  );
};
