import { Alchemy, Network } from "alchemy-sdk";

const API_KEY = import.meta.env.VITE_ALCHEMY_API_KEY;

const settings = {
  apiKey: API_KEY,
  network: Network.ETH_MAINNET,
};

const alchemy = new Alchemy(settings);

export { alchemy };
