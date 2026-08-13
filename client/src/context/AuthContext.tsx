import { createContext, useState, type ReactNode, useEffect } from "react";

type User = { name: string; email: string };

type AuthContextType = {
  user: User | null;
  login: (user: User) => void;
  logout: () => void;
};

// eslint-disable-next-line react-refresh/only-export-components
export const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);

  // Load user from localStorage on first render
  useEffect(() => {
    const storedUser = localStorage.getItem("authUser");
    if (storedUser) {
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setUser(JSON.parse(storedUser));
    }
  }, []);

  const login = (user: User) => {
    setUser(user);
    localStorage.setItem("authUser", JSON.stringify(user));
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem("authUser");
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
