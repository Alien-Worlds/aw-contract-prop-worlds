/**
 * Auto generated. DO NOT edit manually.
 * Last updated on: Fri, 14 Jul 2023 19:20:53 GMT
 */

import { MapperImpl } from '@alien-worlds/api-core';
import { MongoDB, MongoMapper } from '@alien-worlds/storage-mongodb';
import { Cancelwip  } from "../../domain/entities";
import { CancelwipMongoModel, CancelwipRawModel  } from "../dtos/cancelwip.dto";

// Mongo Mappers
export class CancelwipMongoMapper
  extends MongoMapper<Cancelwip, CancelwipMongoModel>
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

  public toEntity(mongoModel: CancelwipMongoModel): Cancelwip {
    const { 
      proposal_id,
      dac_id,
      _id,
      ...rest
    } = mongoModel;

    return Cancelwip.create(
      proposal_id || '',
      dac_id || '',
      _id instanceof MongoDB.ObjectId ? _id.toString() : undefined,
      rest
    );
  }
}


// Raw mappers
export class CancelwipRawMapper
  extends MapperImpl<Cancelwip, CancelwipRawModel>
{
  public fromEntity(entity: Cancelwip): CancelwipRawModel {
    throw new Error('Method not implemented');
  }

  public toEntity(rawModel: CancelwipRawModel): Cancelwip {
    const { 
      proposal_id,
      dac_id,
      ...rest
    } = rawModel;

    return Cancelwip.create(
      proposal_id || '',
      dac_id || '',
      undefined,
      rest
    );
  }
}

