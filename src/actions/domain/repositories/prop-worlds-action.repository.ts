/**
 * Auto generated. DO NOT edit manually.
 * Last updated on: Thu, 27 Jul 2023 15:06:33 GMT
 */

import { 
  ContractAction, 
  ContractActionModel, 
  Repository, 
  injectable, 
} from '@alien-worlds/aw-core';

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
