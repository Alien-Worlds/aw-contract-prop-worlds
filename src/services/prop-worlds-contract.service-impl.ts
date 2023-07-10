/**
 * Auto generated. DO NOT edit manually.
 * Last updated on: Mon, 10 Jul 2023 08:57:16 GMT
 */

import { 
  ConfigsRawModel,
  ProposalsRawModel,
  PropvotesRawModel,
} from '../deltas/data/dtos';
import { 
  EosRpcSourceImpl,
  EosSmartContractServiceImpl,
} from '@alien-worlds/eos';

import { PropWorldsContractService } from './prop-worlds-contract.service';
import { GetTableRowsOptions, Result } from '@alien-worlds/api-core';

/**
 * A service class for interacting with the prop.worlds smart contract.
 * 
 * @class PropWorldsContractServiceImpl
 * @extends {EosSmartContractServiceImpl}
 * @implements { PropWorldsContractService}
*/
export class PropWorldsContractServiceImpl
  extends EosSmartContractServiceImpl
  implements PropWorldsContractService 
{
  /**
   * Creates an instance of PropWorldsContractServiceImpl.
   * 
   * @constructor
   * @param {EosRpcSourceImpl} eosRpcSourceImpl - The EOS RPC source to use for interactions.
   * @param {string} serviceUrl - Service Url
   */
  constructor(eosRpcSourceImpl: EosRpcSourceImpl, serviceUrl: string) {
    super(eosRpcSourceImpl, serviceUrl, 'prop.worlds');
  }

  /**
   * A EosSmartContractServiceImpl for the configs table.
   * 
   * @type {EosSmartContractServiceImpl}
   * @param {GetTableRowsOptions} options 
   */
  public async fetchConfigs (
    options?: GetTableRowsOptions
  ): Promise<Result<ConfigsRawModel[], Error>> {
    const table_key = 'data';
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
   * A EosSmartContractServiceImpl for the proposals table.
   * 
   * @type {EosSmartContractServiceImpl}
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
   * A EosSmartContractServiceImpl for the propvotes table.
   * 
   * @type {EosSmartContractServiceImpl}
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
