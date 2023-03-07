import { FunctionComponent } from "react";
import { FaImage } from "react-icons/fa";

type NFTImageProps = {
  imageSrc?: string;
};

const NFTImage: FunctionComponent<NFTImageProps> = ({ imageSrc }) => {
  return (
    <>
      {imageSrc ? (
        <img
          className="w-full aspect-square object-cover rounded-md mb-4"
          src={imageSrc}
        />
      ) : (
        <div className="w-full aspect-square bg-slate-700/50 rounded-md flex mb-4 items-center justify-center text-gray-600">
          <FaImage className="text-6xl" />
        </div>
      )}
    </>
  );
};

export { NFTImage };
