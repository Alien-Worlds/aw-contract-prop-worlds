/**
 * Auto generated. DO NOT edit manually.
 * Last updated on: Thu, 27 Jul 2023 15:06:33 GMT
 */

import { MapperImpl } from '@alien-worlds/aw-core';
import { MongoDB, MongoMapper } from '@alien-worlds/aw-storage-mongodb';
import { Cancelprop  } from "../../domain/entities";
import { CancelpropMongoModel, CancelpropRawModel  } from "../dtos/cancelprop.dto";

// Mongo Mappers
export class CancelpropMongoMapper
  extends MongoMapper<Cancelprop, CancelpropMongoModel>
{
  constructor() {
    super();

    this.mappingFromEntity.set('proposalId', { 
      key: 'proposal_id', 
      mapper: (value: string) => value,
    });

    this.mappingFromEntity.set('dacId', { 
      key: 'dac_id', 
      mapper: (value: string) => value,
    });

  }

  public toEntity(mongoModel: CancelpropMongoModel): Cancelprop {
    const { 
      proposal_id,
      dac_id,
      _id,
      ...rest
    } = mongoModel;

    return Cancelprop.create(
      proposal_id || '',
      dac_id || '',
      _id instanceof MongoDB.ObjectId ? _id.toString() : undefined,
      rest
    );
  }
}


// Raw mappers
export class CancelpropRawMapper
  extends MapperImpl<Cancelprop, CancelpropRawModel>
{
  public fromEntity(entity: Cancelprop): CancelpropRawModel {
    throw new Error('Method not implemented');
  }

  public toEntity(rawModel: CancelpropRawModel): Cancelprop {
    const { 
      proposal_id,
      dac_id,
      ...rest
    } = rawModel;

    return Cancelprop.create(
      proposal_id || '',
      dac_id || '',
      undefined,
      rest
    );
  }
}

