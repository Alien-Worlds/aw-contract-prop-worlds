/**
 * Auto generated. DO NOT edit manually.
 * Last updated on: Mon, 10 Jul 2023 08:57:16 GMT
 */

import {
  MapperImpl,
  parseToBigInt,
} from '@alien-worlds/api-core';
import { MongoDB } from '@alien-worlds/storage-mongodb';
import { Votepropfin  } from "../../domain/entities";
import { VotepropfinMongoModel, VotepropfinRawModel  } from "../dtos/votepropfin.dto";

// Mongo Mappers
export class VotepropfinMongoMapper
  extends MapperImpl<Votepropfin, VotepropfinMongoModel>
{
  constructor() {
    super();

    this.mappingFromEntity.set('custodian', { 
      key: 'custodian', 
      mapper: (value: string) => 
        value,
    });

    this.mappingFromEntity.set('proposalId', { 
      key: 'proposal_id', 
      mapper: (value: string) => 
        value,
    });

    this.mappingFromEntity.set('vote', { 
      key: 'vote', 
      mapper: (value: string) => 
        value,
    });

    this.mappingFromEntity.set('dacId', { 
      key: 'dac_id', 
      mapper: (value: string) => 
        value,
    });

  }

  public toEntity(mongoModel: VotepropfinMongoModel): Votepropfin {
    const { 
      custodian,
      proposal_id,
      vote,
      dac_id,
      _id, 
      ...rest
    } = mongoModel;

    return Votepropfin.create(
        custodian ?? '',
        proposal_id ?? '',
        vote ?? '',
        dac_id ?? '',
      _id instanceof MongoDB.ObjectId ? _id.toString() : undefined,
      rest
    );
  }
}


// Raw mappers
export class VotepropfinRawMapper
  extends MapperImpl<Votepropfin, VotepropfinRawModel>
{
  public fromEntity(entity: Votepropfin): VotepropfinRawModel {
    throw new Error('Method not implemented');
  }

  public toEntity(rawModel: VotepropfinRawModel): Votepropfin {
    const { 
      custodian,
      proposal_id,
      vote,
      dac_id,
      ...rest
    } = rawModel;

    return Votepropfin.create(
        custodian ?? '',
        proposal_id ?? '',
        vote ?? '',
        dac_id ?? '',
      undefined,
      rest
    );
  }
}

