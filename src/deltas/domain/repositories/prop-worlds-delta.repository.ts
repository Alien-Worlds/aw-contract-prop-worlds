/**
 * Auto generated. DO NOT edit manually.
 * Last updated on: Wed, 12 Jul 2023 11:36:10 GMT
 */

import { 
  ContractDelta, 
  ContractDeltaModel, 
  Repository, 
  injectable, 
} from '@alien-worlds/api-core';

import { DataDocumentType } from '../../data/dtos/prop-worlds-delta.dto';
import { DataEntityType } from '../../domain/entities/prop-worlds-delta';

/**
 * @description This abstract class represents a repository for `prop.worlds` contract deltas.
 */
@injectable()
export abstract class PropWorldsDeltaRepository extends Repository<
  ContractDelta<DataEntityType, DataDocumentType>,
  ContractDeltaModel
> {
  public static Token = 'PROP_WORLDS_DELTA_REPOSITORY';
}
