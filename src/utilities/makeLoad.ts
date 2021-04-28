import { GraphQLClient as GraphqlClient } from "graphql-request/dist/index";

import type { Load, LoadInput } from "@sveltejs/kit";

import { backendGraphqlUrl } from "./constants";
import { getSdk } from "../queries/automatically-typed";

import type { Sdk } from "../queries/automatically-typed";

export default function makeLoad(
  createVars: (input: LoadInput, sdk: Sdk) => unknown
): Load {
  return async (input: LoadInput) => {
    const sdk = await getSdk(new GraphqlClient(backendGraphqlUrl));
    return {
      props: {
        queried: await createVars(input, sdk),
      },
    };
  };
}
