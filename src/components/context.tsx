import { createContext, FC, useState } from 'react';

export let ActiveContext = createContext({});

export interface IActiveContext {
  rank: string; 
  setRank: React.Dispatch<React.SetStateAction<string>>
}

interface ContextProviderProps{
  children: JSX.Element
}

const ContextProvider: FC<ContextProviderProps> = ({ children }) => {
  const [rank, setRank] = useState('');

  return (
    <ActiveContext.Provider value={{rank, setRank}} >
      {children}
    </ActiveContext.Provider>
  );
};

export default ContextProvider;
