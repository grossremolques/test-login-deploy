import { createContext, useContext, useState } from "react";
import supabase from "../../services/supabaseClient";
import { AuthApiError } from "@supabase/supabase-js";
import { credencialsError } from "../../services/errors";

const AuthContext = createContext();
export const useAuth = () => useContext(AuthContext);

export const AuthContextProvider = ({ children }) => {
  const [userSession, setUserSession] = useState(null);

  const getSession = async () => {
    const { data } = supabase.auth.onAuthStateChange((event, session) =>{
        setUserSession(session)
    })
    return () => {
        data.subscription.unsubscribe()
    }
  };
  const login = async (dataLogin) => {
    try {
        const { data, error } = await supabase.auth.signInWithPassword({
            email: dataLogin.email,
            password: dataLogin.password,
          });
          if (error instanceof AuthApiError) {
            return new credencialsError().name;
          }
          return data;
        } catch (error) {
          console.error("Error general:", error);
        }
    

  }
  const logout = async () => {
    const { error } = await supabase.auth.signOut();
    if (error) return error;
  }
  return (
    <AuthContext.Provider value={{ userSession, getSession, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};