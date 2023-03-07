import { ethers } from "ethers";
import { FunctionComponent, useEffect, useState } from "react";
import { FieldValues, useForm } from "react-hook-form";
import { Button } from "../Button";

type ConnectProps = {
  setAddress: (address: `0x${string}`) => void;
};

const Connect: FunctionComponent<ConnectProps> = ({ setAddress }) => {
  const [error, setError] = useState("");
  const {
    register,
    handleSubmit,
    watch,
    formState: { isValid },
  } = useForm();

  const onSubmit = ({ addressInput }: FieldValues) => {
    try {
      if (!ethers.isAddress(addressInput)) {
        throw new Error("Not a valid Ethereum Address");
      }
      setAddress(addressInput as `0x${string}`);
    } catch (error: any) {
      setError(error.message);
    }
  };

  const addressInputValue = watch("addressInput");

  useEffect(() => {
    setError("");
  }, [addressInputValue]);

  return (
    <div className="flex flex-col h-screen w-full items-center justify-center">
      <h1 className="text-2xl font-semibold mb-4 text-center px-4">
        Enter a valid Ethereum Address to show its NFTs
      </h1>
      <form
        className="flex flex-col justify-center items-center px-4 w-full max-w-lg"
        onSubmit={handleSubmit(onSubmit)}
      >
        <div className="max-w-xs w-full">
          <input
            className="outline-none bg-transparent border-slate-500 hover:border-indigo-400 focus:border-indigo-400 
          transition border-2 rounded-md mb-4 pl-3 pr-2 py-2 w-full block"
            placeholder="Enter your address..."
            {...register("addressInput", { required: true })}
          />
        </div>
        <Button disabled={!isValid}>Connect</Button>
        <p className="min-h-[3rem] py-4 text-red-500">{error}</p>
      </form>
    </div>
  );
};

export { Connect };
