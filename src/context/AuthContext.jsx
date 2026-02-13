
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

  const login = (provider) => {
    setLoading(true);
    // Simulate network delay
    setTimeout(() => {
        let mockUser = {
            uid: "demo-123",
            displayName: "Alex Johnson",
            email: "alex@rapidhome.demo",
            photoURL: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
            provider: provider // 'google', 'facebook', or 'twitter'
        };

        if (provider === 'facebook') {
            mockUser.displayName = "Alex (FB)";
            mockUser.photoURL = "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/2021_Facebook_icon.svg/2048px-2021_Facebook_icon.svg.png"; // FB Logo placeholder
        } else if (provider === 'twitter') {
             mockUser.displayName = "@alex_j";
             mockUser.photoURL = "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6f/Logo_of_Twitter.svg/512px-Logo_of_Twitter.svg.png"; // Twitter Logo placeholder
        }

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
    login,
    logOut
  };

  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  );
}
