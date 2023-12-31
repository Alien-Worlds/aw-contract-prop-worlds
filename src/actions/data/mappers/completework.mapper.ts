/**
 * Auto generated. DO NOT edit manually.
 * Last updated on: Thu, 27 Jul 2023 15:06:33 GMT
 */

import { MapperImpl } from '@alien-worlds/aw-core';
import { MongoDB, MongoMapper } from '@alien-worlds/aw-storage-mongodb';
import { Completework  } from "../../domain/entities";
import { CompleteworkMongoModel, CompleteworkRawModel  } from "../dtos/completework.dto";

// Mongo Mappers
export class CompleteworkMongoMapper
  extends MongoMapper<Completework, CompleteworkMongoModel>
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

  public toEntity(mongoModel: CompleteworkMongoModel): Completework {
    const { 
      proposal_id,
      dac_id,
      _id,
      ...rest
    } = mongoModel;

    return Completework.create(
      proposal_id || '',
      dac_id || '',
      _id instanceof MongoDB.ObjectId ? _id.toString() : undefined,
      rest
    );
  }
}


// Raw mappers
export class CompleteworkRawMapper
  extends MapperImpl<Completework, CompleteworkRawModel>
{
  public fromEntity(entity: Completework): CompleteworkRawModel {
    throw new Error('Method not implemented');
  }

  public toEntity(rawModel: CompleteworkRawModel): Completework {
    const { 
      proposal_id,
      dac_id,
      ...rest
    } = rawModel;

    return Completework.create(
      proposal_id || '',
      dac_id || '',
      undefined,
      rest
    );
  }
}

