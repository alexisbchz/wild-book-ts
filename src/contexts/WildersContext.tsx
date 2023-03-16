import { createContext, useContext, useEffect, useState } from "react";
import axios from "axios";
import IWilder from "../interfaces/IWilder";

interface WildersContextProps {
  wilders: IWilder[];
  fetchData: () => void | Promise<void>;
}

export const WildersContext = createContext<WildersContextProps>({
  wilders: [],
  fetchData: () => {},
});

interface WildersProviderProps {
  children?: React.ReactNode;
}

export function WildersProvider({ children }: WildersProviderProps) {
  const [wilders, setWilders] = useState<IWilder[]>([]);

  const fetchData = async () => {
    const result = await axios.get("http://localhost:5000/api/wilders");

    setWilders(result.data);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <WildersContext.Provider value={{ wilders, fetchData }}>
      {children}
    </WildersContext.Provider>
  );
}

export const useWilders = () => useContext(WildersContext);
