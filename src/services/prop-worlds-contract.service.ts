/**
 * Auto generated. DO NOT edit manually.
 * Last updated on: Thu, 27 Jul 2023 15:06:33 GMT
 */

import {
  GetTableRowsOptions,
  Result,
  SmartContractService,
} from '@alien-worlds/aw-core';

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
