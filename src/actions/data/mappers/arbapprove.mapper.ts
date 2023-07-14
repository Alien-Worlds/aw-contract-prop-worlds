/**
 * Auto generated. DO NOT edit manually.
 * Last updated on: Fri, 14 Jul 2023 19:20:53 GMT
 */

import { MapperImpl } from '@alien-worlds/api-core';
import { MongoDB, MongoMapper } from '@alien-worlds/storage-mongodb';
import { Arbapprove  } from "../../domain/entities";
import { ArbapproveMongoModel, ArbapproveRawModel  } from "../dtos/arbapprove.dto";

// Mongo Mappers
export class ArbapproveMongoMapper
  extends MongoMapper<Arbapprove, ArbapproveMongoModel>
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

  public toEntity(mongoModel: ArbapproveMongoModel): Arbapprove {
    const { 
      arbitrator,
      proposal_id,
      dac_id,
      _id,
      ...rest
    } = mongoModel;

    return Arbapprove.create(
      arbitrator || '',
      proposal_id || '',
      dac_id || '',
      _id instanceof MongoDB.ObjectId ? _id.toString() : undefined,
      rest
    );
  }
}


// Raw mappers
export class ArbapproveRawMapper
  extends MapperImpl<Arbapprove, ArbapproveRawModel>
{
  public fromEntity(entity: Arbapprove): ArbapproveRawModel {
    throw new Error('Method not implemented');
  }

  public toEntity(rawModel: ArbapproveRawModel): Arbapprove {
    const { 
      arbitrator,
      proposal_id,
      dac_id,
      ...rest
    } = rawModel;

    return Arbapprove.create(
      arbitrator || '',
      proposal_id || '',
      dac_id || '',
      undefined,
      rest
    );
  }
}

