import { createContext, useState } from "react";

const PlatformID = createContext();

export const PlatformIdProvider = ({ children }) => {
  const [id, setId] = useState("");

  return (
    <PlatformID.Provider value={{ id, setId }}>{children}</PlatformID.Provider>
  );
};

export default PlatformID;
