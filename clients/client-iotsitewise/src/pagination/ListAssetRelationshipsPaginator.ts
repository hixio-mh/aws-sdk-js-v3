import { Paginator } from "@aws-sdk/types";

import {
  ListAssetRelationshipsCommand,
  ListAssetRelationshipsCommandInput,
  ListAssetRelationshipsCommandOutput,
} from "../commands/ListAssetRelationshipsCommand";
import { IoTSiteWise } from "../IoTSiteWise";
import { IoTSiteWiseClient } from "../IoTSiteWiseClient";
import { IoTSiteWisePaginationConfiguration } from "./Interfaces";

/**
 * @private
 */
const makePagedClientRequest = async (
  client: IoTSiteWiseClient,
  input: ListAssetRelationshipsCommandInput,
  ...args: any
): Promise<ListAssetRelationshipsCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListAssetRelationshipsCommand(input), ...args);
};
/**
 * @private
 */
const makePagedRequest = async (
  client: IoTSiteWise,
  input: ListAssetRelationshipsCommandInput,
  ...args: any
): Promise<ListAssetRelationshipsCommandOutput> => {
  // @ts-ignore
  return await client.listAssetRelationships(input, ...args);
};
export async function* paginateListAssetRelationships(
  config: IoTSiteWisePaginationConfiguration,
  input: ListAssetRelationshipsCommandInput,
  ...additionalArguments: any
): Paginator<ListAssetRelationshipsCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.nextToken
  let token: typeof input.nextToken | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: ListAssetRelationshipsCommandOutput;
  while (hasNext) {
    input.nextToken = token;
    input["maxResults"] = config.pageSize;
    if (config.client instanceof IoTSiteWise) {
      page = await makePagedRequest(config.client, input, ...additionalArguments);
    } else if (config.client instanceof IoTSiteWiseClient) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected IoTSiteWise | IoTSiteWiseClient");
    }
    yield page;
    token = page.nextToken;
    hasNext = !!token;
  }
  // @ts-ignore
  return undefined;
}
