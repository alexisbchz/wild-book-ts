import { createContext, useContext, useEffect, useState } from "react";
import axios from "axios";
import IWilder from "../interfaces/IWilder";
import { gql, useQuery } from "@apollo/client";

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

const GET_WILDERS = gql`
  query GetAllWilders {
    getAllWilders {
      id
      name
      city
      skills {
        id
        name
      }
    }
  }
`;

export function WildersProvider({ children }: WildersProviderProps) {
  const { data, refetch } = useQuery(GET_WILDERS);
  const wilders = data?.getAllWilders || [];
  const fetchData = async () => {
    await refetch();
  };

  return (
    <WildersContext.Provider value={{ wilders, fetchData }}>
      {children}
    </WildersContext.Provider>
  );
}

export const useWilders = () => useContext(WildersContext);
