import React, { useContext, useState, useEffect } from "react";
import { auth, onAuthStateChanged } from "../firebase/firebaseConfig";

//creating a context
const AuthContext = React.createContext();
//Hook to access context
const UserAuth = () => {
  return useContext(AuthContext);
};

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState();
  const [loading, setLoading] = useState(true);
  //effect to run the check once
  useEffect(() => {
    //Checking if there is a user
    const cancelSubcripcion = onAuthStateChanged(auth, (user) => {
      setUser(user);
      setLoading(false);
    });
    return cancelSubcripcion;
  }, []);
  return (
    <>
      <AuthContext.Provider value={{ user: user }}>
        {!loading && children}
      </AuthContext.Provider>
    </>
  );
};

export { AuthProvider, UserAuth };
