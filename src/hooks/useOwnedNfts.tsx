import { OwnedNftsResponse } from "alchemy-sdk";
import { useEffect, useState } from "react";
import { alchemy } from "../utils/web3";

type UseOwnedNftsOptions = {
  address: `0x${string}` | null;
};

const useOwnedNfts = ({ address }: UseOwnedNftsOptions) => {
  const [data, setData] = useState<OwnedNftsResponse | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (!address) return;

    alchemy.nft
      .getNftsForOwner(address)
      .then((res) => setData(res))
      .finally(() => setIsLoading(false));
  }, [address]);

  if (!data) {
    return { isLoading };
  }

  return {
    data: data.ownedNfts.filter((nft) => !nft.metadataError),
    isLoading,
  };
};

export { useOwnedNfts };
