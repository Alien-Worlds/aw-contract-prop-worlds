/**
 * Auto generated. DO NOT edit manually.
 * Last updated on: Wed, 12 Jul 2023 11:36:10 GMT
 */

import { MapperImpl } from '@alien-worlds/api-core';
import { MongoDB } from '@alien-worlds/storage-mongodb';
import { Completework  } from "../../domain/entities";
import { CompleteworkMongoModel, CompleteworkRawModel  } from "../dtos/completework.dto";

// Mongo Mappers
export class CompleteworkMongoMapper
  extends MapperImpl<Completework, CompleteworkMongoModel>
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

