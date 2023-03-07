import { useEffect, useState } from "react";
import { alchemy } from "../utils/web3";

type UseNftFloorPriceOptions = {
  contractAddress?: `0x${string}`;
};

const useNftFloorPrice = ({ contractAddress }: UseNftFloorPriceOptions) => {
  const [floorPrice, setFloorPrice] = useState<number | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (!contractAddress) return;

    alchemy.nft
      .getFloorPrice(contractAddress)
      .then((res) => {
        if ("error" in res.openSea) {
          setIsLoading(false);
          return;
        }

        setFloorPrice(res.openSea.floorPrice);
        setIsLoading(false);
      })
      .catch(() => setIsLoading(false));
  }, [contractAddress]);

  return {
    floorPrice,
    isLoading,
  };
};

export { useNftFloorPrice };
