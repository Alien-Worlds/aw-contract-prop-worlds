/**
 * Auto generated. DO NOT edit manually.
 * Last updated on: Mon, 10 Jul 2023 08:57:16 GMT
 */

import {
  MapperImpl,
  parseToBigInt,
} from '@alien-worlds/api-core';
import { MongoDB } from '@alien-worlds/storage-mongodb';
import { Dispute  } from "../../domain/entities";
import { DisputeMongoModel, DisputeRawModel  } from "../dtos/dispute.dto";

// Mongo Mappers
export class DisputeMongoMapper
  extends MapperImpl<Dispute, DisputeMongoModel>
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

  public toEntity(mongoModel: DisputeMongoModel): Dispute {
    const { 
      proposal_id,
      dac_id,
      _id, 
      ...rest
    } = mongoModel;

    return Dispute.create(
        proposal_id ?? '',
        dac_id ?? '',
      _id instanceof MongoDB.ObjectId ? _id.toString() : undefined,
      rest
    );
  }
}


// Raw mappers
export class DisputeRawMapper
  extends MapperImpl<Dispute, DisputeRawModel>
{
  public fromEntity(entity: Dispute): DisputeRawModel {
    throw new Error('Method not implemented');
  }

  public toEntity(rawModel: DisputeRawModel): Dispute {
    const { 
      proposal_id,
      dac_id,
      ...rest
    } = rawModel;

    return Dispute.create(
        proposal_id ?? '',
        dac_id ?? '',
      undefined,
      rest
    );
  }
}

