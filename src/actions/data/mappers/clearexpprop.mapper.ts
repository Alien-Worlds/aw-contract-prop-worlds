/**
 * Auto generated. DO NOT edit manually.
 * Last updated on: Fri, 14 Jul 2023 17:54:32 GMT
 */

import { MapperImpl } from '@alien-worlds/api-core';
import { MongoDB, MongoMapper } from '@alien-worlds/storage-mongodb';
import { Clearexpprop  } from "../../domain/entities";
import { ClearexppropMongoModel, ClearexppropRawModel  } from "../dtos/clearexpprop.dto";

// Mongo Mappers
export class ClearexppropMongoMapper
  extends MongoMapper<Clearexpprop, ClearexppropMongoModel>
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

  public toEntity(mongoModel: ClearexppropMongoModel): Clearexpprop {
    const { 
      proposal_id,
      dac_id,
      _id,
      ...rest
    } = mongoModel;

    return Clearexpprop.create(
      proposal_id || '',
      dac_id || '',
      _id instanceof MongoDB.ObjectId ? _id.toString() : undefined,
      rest
    );
  }
}


// Raw mappers
export class ClearexppropRawMapper
  extends MapperImpl<Clearexpprop, ClearexppropRawModel>
{
  public fromEntity(entity: Clearexpprop): ClearexppropRawModel {
    throw new Error('Method not implemented');
  }

  public toEntity(rawModel: ClearexppropRawModel): Clearexpprop {
    const { 
      proposal_id,
      dac_id,
      ...rest
    } = rawModel;

    return Clearexpprop.create(
      proposal_id || '',
      dac_id || '',
      undefined,
      rest
    );
  }
}

