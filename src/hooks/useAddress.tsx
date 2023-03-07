import {
  createContext,
  FunctionComponent,
  ReactNode,
  useContext,
  useState,
} from "react";

type AddressContextType = {
  address: `0x${string}` | null;
  setAddress: (address: `0x${string}` | null) => void;
};

const AddressContext = createContext<AddressContextType>({
  address: null,
  setAddress: () => null,
});

const AddressContextProvider: FunctionComponent<{ children: ReactNode }> = ({
  children,
}) => {
  const [address, setAddress] = useState<`0x${string}` | null>(null);

  return (
    <AddressContext.Provider value={{ address, setAddress }}>
      {children}
    </AddressContext.Provider>
  );
};

const useAddress = () => useContext(AddressContext);

export { AddressContextProvider, useAddress };
