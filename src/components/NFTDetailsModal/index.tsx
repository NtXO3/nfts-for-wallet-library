import { OwnedNft } from "alchemy-sdk";
import { FunctionComponent, useState } from "react";
import { formatAddress } from "../../utils";
import { Modal } from "../Modal";
import ethIcon from "../../assets/eth.svg";
import { FaDiscord, FaTwitter, FaGlobe } from "react-icons/fa";
import { SocialLink } from "../SocialLink";
import { MdVerified } from "react-icons/md";
import { NFTImage } from "../NFTImage";

type NFTDetailsModalProps = {
  nft: OwnedNft;
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
  floorPrice: number | null;
  address?: `0x${string}`;
};

const NFTDetailsModal: FunctionComponent<NFTDetailsModalProps> = ({
  nft,
  isOpen,
  setIsOpen,
  floorPrice,
  address,
}) => {
  const [showFullDescription, setShowFullDescription] = useState(false);

  return (
    <Modal setIsOpen={setIsOpen} isOpen={isOpen} title="NFT Details">
      <div className="flex flex-wrap">
        <div className="sm:w-[45%] w-full max-w-sm sm:pr-8 relative mb-8">
          <NFTImage imageSrc={nft.media[0]?.gateway} />

          {nft.contract.openSea?.safelistRequestStatus === "verified" && (
            <div className="mt-4 flex items-center">
              <MdVerified className="text-2xl text-sky-500 mr-1" />
              <h4 className="font-semibold text-gray-300">
                Verified on OpenSea
              </h4>
            </div>
          )}
        </div>
        <div className="bg-gray-800 w-full sm:w-[55%] p-6 rounded-md">
          <div className="mb-6">
            <span className="text-gray-400" id="nft-title-label">
              Title
            </span>
            <h2
              className="font-bold text-xl sm:text-2xl"
              aria-labelledby="nft-title-label"
            >
              {nft.title || "No Title"}
            </h2>
          </div>

          <div className="grid grid-cols-2 gap-8 mb-6">
            <div>
              <span
                className="text-gray-400 block text-sm sm:text-base"
                id="nft-title-label"
              >
                Contract Address
              </span>
              <a
                className="font-semibold text-lg text-sky-500 hover:underline"
                aria-labelledby="nft-title-label"
                href={`https://etherscan.io/address/${nft.contract.address}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                {formatAddress(nft.contract.address)}
              </a>
            </div>
            <div>
              <span
                className="text-gray-400 block text-sm sm:text-base"
                id="nft-title-label"
              >
                Floor Price
              </span>
              <h3 className="font-semibold text-lg flex items-center">
                <img src={ethIcon} className="w-4 mr-2" />
                {floorPrice ?? "Unknown"}
              </h3>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-8 mb-6">
            <div>
              <span
                className="text-gray-400 block text-sm sm:text-base"
                id="nft-title-label"
              >
                Owner Address
              </span>
              <a
                className="font-semibold text-lg text-sky-500 hover:underline"
                aria-labelledby="nft-title-label"
                href={`https://etherscan.io/address/${address}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                {formatAddress(address)}
              </a>
            </div>
          </div>

          <div className="mb-6">
            <span
              className="text-gray-400 block border-b border-gray-500 pb-1 mb-1"
              id="nft-title-label"
            >
              About
            </span>
            <p
              className="font-light text-gray-100 leading-7"
              aria-labelledby="nft-title-label"
            >
              {nft.description.length < 180 || showFullDescription ? (
                nft.description || "No Description"
              ) : (
                <>{nft.description.slice(0, 180)}...</>
              )}
              <br />
              {nft.description.length > 180 && (
                <a
                  className="underline cursor-pointer"
                  onClick={() => setShowFullDescription(!showFullDescription)}
                >
                  {showFullDescription ? "Read less" : "Read more"}
                </a>
              )}
            </p>
          </div>
          <a
            href={`https://opensea.io/assets/ethereum/${nft.contract.address}/${nft.tokenId}`}
            className="bg-indigo-500 py-3 px-8 rounded-md cursor-pointer font-semibold hover:opacity-80 transition inline-block mb-4"
            target="_blank"
            rel="noopener noreferrer"
          >
            View On OpenSea
          </a>
          <div className="flex items-center gap-4">
            {nft.contract.openSea?.discordUrl && (
              <SocialLink href={nft.contract.openSea.discordUrl}>
                <FaDiscord />
              </SocialLink>
            )}
            {nft.contract.openSea?.twitterUsername && (
              <SocialLink
                href={`https://twitter.com/${nft.contract.openSea.twitterUsername}`}
              >
                <FaTwitter />
              </SocialLink>
            )}
            {nft.contract.openSea?.externalUrl && (
              <SocialLink href={nft.contract.openSea?.externalUrl}>
                <FaGlobe />
              </SocialLink>
            )}
          </div>
        </div>
      </div>
    </Modal>
  );
};

export { NFTDetailsModal };
