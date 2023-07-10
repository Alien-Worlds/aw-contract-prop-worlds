/**
 * Auto generated. DO NOT edit manually.
 * Last updated on: Mon, 10 Jul 2023 08:57:16 GMT
 */

import {
  GetTableRowsOptions,
  Result,
  SmartContractService,
} from '@alien-worlds/api-core';

import { 
  ConfigsRawModel,
  ProposalsRawModel,
  PropvotesRawModel,
} from '../deltas/data/dtos';

export abstract class PropWorldsContractService extends SmartContractService {
  public static Token = 'PROP_WORLDS_CONTRACT_SERVICE';

  public abstract fetchConfigs(
    options?: GetTableRowsOptions
  ): Promise<Result<ConfigsRawModel[], Error>>;
  public abstract fetchProposals(
    options?: GetTableRowsOptions
  ): Promise<Result<ProposalsRawModel[], Error>>;
  public abstract fetchPropvotes(
    options?: GetTableRowsOptions
  ): Promise<Result<PropvotesRawModel[], Error>>;
}
