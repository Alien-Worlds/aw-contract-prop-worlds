/**
 * Auto generated. DO NOT edit manually.
 * Last updated on: Thu, 27 Jul 2023 15:06:33 GMT
 */

import { MapperImpl } from '@alien-worlds/aw-core';
import { MongoDB, MongoMapper } from '@alien-worlds/aw-storage-mongodb';
import { Arbdeny  } from "../../domain/entities";
import { ArbdenyMongoModel, ArbdenyRawModel  } from "../dtos/arbdeny.dto";

// Mongo Mappers
export class ArbdenyMongoMapper
  extends MongoMapper<Arbdeny, ArbdenyMongoModel>
{
  constructor() {
    super();

    this.mappingFromEntity.set('arbitrator', { 
      key: 'arbitrator', 
      mapper: (value: string) => value,
    });

    this.mappingFromEntity.set('proposalId', { 
      key: 'proposal_id', 
      mapper: (value: string) => value,
    });

    this.mappingFromEntity.set('dacId', { 
      key: 'dac_id', 
      mapper: (value: string) => value,
    });

  }

  public toEntity(mongoModel: ArbdenyMongoModel): Arbdeny {
    const { 
      arbitrator,
      proposal_id,
      dac_id,
      _id,
      ...rest
    } = mongoModel;

    return Arbdeny.create(
      arbitrator || '',
      proposal_id || '',
      dac_id || '',
      _id instanceof MongoDB.ObjectId ? _id.toString() : undefined,
      rest
    );
  }
}


// Raw mappers
export class ArbdenyRawMapper
  extends MapperImpl<Arbdeny, ArbdenyRawModel>
{
  public fromEntity(entity: Arbdeny): ArbdenyRawModel {
    throw new Error('Method not implemented');
  }

  public toEntity(rawModel: ArbdenyRawModel): Arbdeny {
    const { 
      arbitrator,
      proposal_id,
      dac_id,
      ...rest
    } = rawModel;

    return Arbdeny.create(
      arbitrator || '',
      proposal_id || '',
      dac_id || '',
      undefined,
      rest
    );
  }
}

