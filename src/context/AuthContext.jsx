
import { createContext, useContext, useState, useEffect } from "react";

const AuthContext = createContext();

export function useAuth() {
  return useContext(AuthContext);
}

export function AuthProvider({ children }) {
  const [currentUser, setCurrentUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Check for saved user in local storage to persist session across refreshes (Simulation)
    const storedUser = localStorage.getItem("rapid_home_user");
    if (storedUser) {
        setCurrentUser(JSON.parse(storedUser));
    }
    setLoading(false);
  }, []);

  // MOCK Sign in with Google (Simulated for Demo)
  const googleSignIn = () => {
    setLoading(true);
    // Simulate network delay
    setTimeout(() => {
        const mockUser = {
            uid: "demo-123",
            displayName: "Alex Johnson",
            email: "alex@rapidhome.demo",
            photoURL: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
        };
        setCurrentUser(mockUser);
        localStorage.setItem("rapid_home_user", JSON.stringify(mockUser));
        setLoading(false);
    }, 800); 
  };

  // MOCK Log out
  const logOut = () => {
    setCurrentUser(null);
    localStorage.removeItem("rapid_home_user");
  };

  const value = {
    currentUser,
    googleSignIn,
    logOut
  };

  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  );
}
