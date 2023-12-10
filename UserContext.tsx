import React, { createContext, useState, ReactNode } from "react";

interface UserContextProps {
  children: ReactNode;
}

export interface UserContextType {
  userId: string;
  setUserId: React.Dispatch<React.SetStateAction<string>>;
}

const UserType = createContext<UserContextType | undefined>(undefined);

const UserContext: React.FC<UserContextProps> = ({ children }) => {
  const [userId, setUserId] = useState("");

  return (
    <UserType.Provider value={{ userId, setUserId }}>
      {children}
    </UserType.Provider>
  );
};

export { UserType, UserContext };
