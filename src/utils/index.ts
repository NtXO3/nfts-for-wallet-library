const formatAddress = (address?: string) =>
  `${address?.slice(0, 3)}...${address?.slice(address.length - 3)}`;

export { formatAddress };
