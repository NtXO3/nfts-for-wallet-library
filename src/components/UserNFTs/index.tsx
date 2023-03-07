import { FunctionComponent } from "react";
import { useOwnedNfts } from "../../hooks/useOwnedNfts";
import { NFTCard } from "../NFTCard";

type UserNFTsProps = {
  address: `0x${string}`;
};

const UserNFTs: FunctionComponent<UserNFTsProps> = ({ address }) => {
  const { data, isLoading } = useOwnedNfts({ address });

  if (!data?.length && !isLoading) {
    return (
      <div>
        <h2 className="text-gray-400 text-2xl font-medium my-16">
          This Wallet Address does not have any NFTs...
        </h2>
      </div>
    );
  }

  return (
    <div className="grid sm:grid-cols-2 grid-cols-1 lg:grid-cols-3 gap-8">
      {isLoading
        ? new Array(6)
            .fill(0)
            .map((_, index) => (
              <NFTCard isLoading key={`skeleton-nft-${index}`} />
            ))
        : data?.map((nft) => <NFTCard key={nft.title} nft={nft} />)}
    </div>
  );
};

export { UserNFTs };
