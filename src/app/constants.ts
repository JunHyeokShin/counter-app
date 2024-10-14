import { getContract } from "thirdweb";
import { client } from "./client";
import { sepolia } from "thirdweb/chains";

const contractAddress = "0xff1f836ac973cd7d40e2703dbe4541e0da35fc43";

export const CONTRACT = getContract({
  client: client,
  chain: sepolia,
  address: contractAddress,
});
