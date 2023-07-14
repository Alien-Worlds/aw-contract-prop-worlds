/**
 * Auto generated. DO NOT edit manually.
 * Last updated on: Fri, 14 Jul 2023 19:20:53 GMT
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
