/**
 * Auto generated. DO NOT edit manually.
 * Last updated on: Mon, 10 Jul 2023 08:57:16 GMT
 */

import { 
  ContractAction, 
  ContractActionModel, 
  Repository, 
  injectable, 
} from '@alien-worlds/api-core';

import { DataDocumentType } from '../../data/dtos/prop-worlds-action.dto';
import { DataEntityType } from '../../domain/entities/prop-worlds-action';

/**
 * @description This abstract class represents a repository for `prop.worlds` contract actions.
 */
@injectable()
export abstract class PropWorldsActionRepository extends Repository<
  ContractAction<DataEntityType, DataDocumentType>,
  ContractActionModel
> {
  public static Token = 'PROP_WORLDS_ACTION_REPOSITORY';
}
