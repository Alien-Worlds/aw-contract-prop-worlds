/**
 * Auto generated. DO NOT edit manually.
 * Last updated on: Thu, 27 Jul 2023 15:06:33 GMT
 */

import { 
  ConfigsRawModel,
  ProposalsRawModel,
  PropvotesRawModel,
} from '../deltas/data/dtos';
import { 
  AntelopeRpcSourceImpl,
  AntelopeSmartContractServiceImpl,
} from '@alien-worlds/aw-antelope';

import { PropWorldsContractService } from './prop-worlds-contract.service';
import { GetTableRowsOptions, Result } from '@alien-worlds/aw-core';

/**
 * A service class for interacting with the prop.worlds smart contract.
 * 
 * @class PropWorldsContractServiceImpl
 * @extends {AntelopeSmartContractServiceImpl}
 * @implements { PropWorldsContractService}
*/
export class PropWorldsContractServiceImpl
  extends AntelopeSmartContractServiceImpl
  implements PropWorldsContractService 
{
  /**
   * Creates an instance of PropWorldsContractServiceImpl.
   * 
   * @constructor
   * @param {AntelopeRpcSourceImpl} antelopeRpcSourceImpl - The Antelope RPC source to use for interactions.
   * @param {string} serviceUrl - Service Url
   */
  constructor(antelopeRpcSourceImpl: AntelopeRpcSourceImpl, serviceUrl: string) {
    super(antelopeRpcSourceImpl, serviceUrl, 'prop.worlds');
  }

  /**
   * An AntelopeSmartContractServiceImpl for the configs table.
   * 
   * @type {AntelopeSmartContractServiceImpl}
   * @param {GetTableRowsOptions} options 
   */
  public async fetchConfigs (
    options?: GetTableRowsOptions
  ): Promise<Result<ConfigsRawModel[], Error>> {
    const table_key = '';
    const tableRowOptions = {
      ...options,
      code: 'prop.worlds',
      table: 'configs',
      table_key,
    };

    return options?.limit > 0
      ? await this.getMany<ConfigsRawModel>(tableRowOptions)
      : await this.getAll<ConfigsRawModel>(table_key, tableRowOptions);
  }
  /**
   * An AntelopeSmartContractServiceImpl for the proposals table.
   * 
   * @type {AntelopeSmartContractServiceImpl}
   * @param {GetTableRowsOptions} options 
   */
  public async fetchProposals (
    options?: GetTableRowsOptions
  ): Promise<Result<ProposalsRawModel[], Error>> {
    const table_key = 'proposal_id';
    const tableRowOptions = {
      ...options,
      code: 'prop.worlds',
      table: 'proposals',
      table_key,
    };

    return options?.limit > 0
      ? await this.getMany<ProposalsRawModel>(tableRowOptions)
      : await this.getAll<ProposalsRawModel>(table_key, tableRowOptions);
  }
  /**
   * An AntelopeSmartContractServiceImpl for the propvotes table.
   * 
   * @type {AntelopeSmartContractServiceImpl}
   * @param {GetTableRowsOptions} options 
   */
  public async fetchPropvotes (
    options?: GetTableRowsOptions
  ): Promise<Result<PropvotesRawModel[], Error>> {
    const table_key = 'vote_id';
    const tableRowOptions = {
      ...options,
      code: 'prop.worlds',
      table: 'propvotes',
      table_key,
    };

    return options?.limit > 0
      ? await this.getMany<PropvotesRawModel>(tableRowOptions)
      : await this.getAll<PropvotesRawModel>(table_key, tableRowOptions);
  }
}
