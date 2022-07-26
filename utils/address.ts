const ADDRESS_LENGTH = 36;

export function shortenAddress(address: string, chars = 4): string {
  return `${address.substring(0, chars + 1)} ... ${address.substring(ADDRESS_LENGTH - chars)}`;
}
