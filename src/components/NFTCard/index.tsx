import { OwnedNft } from "alchemy-sdk";
import { FunctionComponent, useEffect, useState } from "react";
import { alchemy } from "../../utils/web3";
import ethIcon from "../../assets/eth.svg";
import { Modal } from "../Modal";
import { FaImage, FaDiscord } from "react-icons/fa";
import { formatAddress } from "../../utils";
import { Skeleton } from "../Skeleton";
import { useNftFloorPrice } from "../../hooks/useNftFloorPrice";
import { NFTDetailsModal } from "../NFTDetailsModal";
import { NFTImage } from "../NFTImage";

type NFTCardProps = {
  nft?: OwnedNft;
  isLoading?: boolean;
};

const NFTCard: FunctionComponent<NFTCardProps> = ({ nft, isLoading }) => {
  const { floorPrice, isLoading: floorPriceIsLoading } = useNftFloorPrice({
    contractAddress: nft?.contract.address as `0x${string}` | undefined,
  });
  const [isOpen, setIsOpen] = useState(false);

  if (isLoading) {
    return (
      <div
        className="px-6 py-8 bg-slate-800 rounded-md hover:scale-105 transition duration-300 shadow-md"
        role="button"
        tabIndex={0}
        onClick={() => setIsOpen(true)}
      >
        <div className="flex flex-col h-full">
          <div className="w-full aspect-square mb-6">
            <Skeleton className="w-full h-full" />
          </div>

          <div className="flex flex-col justify-between flex-1">
            <div className="mb-4">
              <Skeleton height={32} className="mb-2 w-full max-w-[16rem]" />
              <Skeleton height={120} className="w-full max-w-[14rem]" />
            </div>

            <h3 className="font-semibold text-lg flex items-center">
              <img src={ethIcon} className="w-5 mr-2" />
              <Skeleton className="max-w-[9rem] w-full" height={28} />
            </h3>
          </div>
        </div>
      </div>
    );
  }

  if (!nft) return null;

  const imageSrc = nft.media[0]?.gateway;

  return (
    <>
      <div
        className="px-6 py-8 bg-slate-800 rounded-md hover:scale-105 transition duration-300 shadow-md"
        role="button"
        tabIndex={0}
        onClick={() => setIsOpen(true)}
      >
        <div className="flex flex-col h-full">
          <NFTImage imageSrc={imageSrc} />
          <div className="flex flex-col justify-between flex-1">
            <div className="mb-4">
              <h2 className="font-semibold text-2xl mb-2">{nft.title}</h2>
              <p className="text-gray-400 font-light leading-7">
                {nft.description.length > 180
                  ? `${nft.description.slice(0, 180)}...`
                  : nft.description}
              </p>
            </div>

            <h3 className="font-semibold text-lg flex items-center">
              <img src={ethIcon} className="w-5 mr-2" />
              {floorPriceIsLoading ? (
                <Skeleton width={76} height={18} />
              ) : (
                floorPrice?.toFixed(5) ?? "Unknown"
              )}
            </h3>
          </div>
        </div>
      </div>

      <NFTDetailsModal
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        nft={nft}
        floorPrice={floorPrice}
      />
    </>
  );
};

export { NFTCard };
