/**
 * Auto generated. DO NOT edit manually.
 * Last updated on: Fri, 14 Jul 2023 19:20:53 GMT
 */

import { MapperImpl } from '@alien-worlds/api-core';
import { MongoDB, MongoMapper } from '@alien-worlds/storage-mongodb';
import { Delegatevote  } from "../../domain/entities";
import { DelegatevoteMongoModel, DelegatevoteRawModel  } from "../dtos/delegatevote.dto";

// Mongo Mappers
export class DelegatevoteMongoMapper
  extends MongoMapper<Delegatevote, DelegatevoteMongoModel>
{
  constructor() {
    super();

    this.mappingFromEntity.set('custodian', { 
      key: 'custodian', 
      mapper: (value: string) => value,
    });

    this.mappingFromEntity.set('proposalId', { 
      key: 'proposal_id', 
      mapper: (value: string) => value,
    });

    this.mappingFromEntity.set('delegateeCustodian', { 
      key: 'delegatee_custodian', 
      mapper: (value: string) => value,
    });

    this.mappingFromEntity.set('dacId', { 
      key: 'dac_id', 
      mapper: (value: string) => value,
    });

  }

  public toEntity(mongoModel: DelegatevoteMongoModel): Delegatevote {
    const { 
      custodian,
      proposal_id,
      delegatee_custodian,
      dac_id,
      _id,
      ...rest
    } = mongoModel;

    return Delegatevote.create(
      custodian || '',
      proposal_id || '',
      delegatee_custodian || '',
      dac_id || '',
      _id instanceof MongoDB.ObjectId ? _id.toString() : undefined,
      rest
    );
  }
}


// Raw mappers
export class DelegatevoteRawMapper
  extends MapperImpl<Delegatevote, DelegatevoteRawModel>
{
  public fromEntity(entity: Delegatevote): DelegatevoteRawModel {
    throw new Error('Method not implemented');
  }

  public toEntity(rawModel: DelegatevoteRawModel): Delegatevote {
    const { 
      custodian,
      proposal_id,
      delegatee_custodian,
      dac_id,
      ...rest
    } = rawModel;

    return Delegatevote.create(
      custodian || '',
      proposal_id || '',
      delegatee_custodian || '',
      dac_id || '',
      undefined,
      rest
    );
  }
}

