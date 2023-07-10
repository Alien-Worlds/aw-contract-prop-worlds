/**
 * Auto generated. DO NOT edit manually.
 * Last updated on: Mon, 10 Jul 2023 08:57:16 GMT
 */

import {
  MapperImpl,
  parseToBigInt,
} from '@alien-worlds/api-core';
import { MongoDB } from '@alien-worlds/storage-mongodb';
import { Finalize  } from "../../domain/entities";
import { FinalizeMongoModel, FinalizeRawModel  } from "../dtos/finalize.dto";

// Mongo Mappers
export class FinalizeMongoMapper
  extends MapperImpl<Finalize, FinalizeMongoModel>
{
  constructor() {
    super();

    this.mappingFromEntity.set('proposalId', { 
      key: 'proposal_id', 
      mapper: (value: string) => 
        value,
    });

    this.mappingFromEntity.set('dacId', { 
      key: 'dac_id', 
      mapper: (value: string) => 
        value,
    });

  }

  public toEntity(mongoModel: FinalizeMongoModel): Finalize {
    const { 
      proposal_id,
      dac_id,
      _id, 
      ...rest
    } = mongoModel;

    return Finalize.create(
        proposal_id ?? '',
        dac_id ?? '',
      _id instanceof MongoDB.ObjectId ? _id.toString() : undefined,
      rest
    );
  }
}


// Raw mappers
export class FinalizeRawMapper
  extends MapperImpl<Finalize, FinalizeRawModel>
{
  public fromEntity(entity: Finalize): FinalizeRawModel {
    throw new Error('Method not implemented');
  }

  public toEntity(rawModel: FinalizeRawModel): Finalize {
    const { 
      proposal_id,
      dac_id,
      ...rest
    } = rawModel;

    return Finalize.create(
        proposal_id ?? '',
        dac_id ?? '',
      undefined,
      rest
    );
  }
}

