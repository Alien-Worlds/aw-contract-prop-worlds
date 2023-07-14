/**
 * Auto generated. DO NOT edit manually.
 * Last updated on: Fri, 14 Jul 2023 17:08:56 GMT
 */

import { MapperImpl } from '@alien-worlds/api-core';
import { MongoDB } from '@alien-worlds/storage-mongodb';
import { Voteprop  } from "../../domain/entities";
import { VotepropMongoModel, VotepropRawModel  } from "../dtos/voteprop.dto";

// Mongo Mappers
export class VotepropMongoMapper
  extends MapperImpl<Voteprop, VotepropMongoModel>
{
  constructor() {
    super();

    this.mappingFromEntity.set('custodian', { 
      key: 'custodian', 
      mapper: (value: string) => value,
    });

    this.mappingFromEntity.set('proposalId', { 
      key: 'proposal_id', 
      mapper: (value: string) => value,
    });

    this.mappingFromEntity.set('vote', { 
      key: 'vote', 
      mapper: (value: string) => value,
    });

    this.mappingFromEntity.set('dacId', { 
      key: 'dac_id', 
      mapper: (value: string) => value,
    });

  }

  public toEntity(mongoModel: VotepropMongoModel): Voteprop {
    const { 
      custodian,
      proposal_id,
      vote,
      dac_id,
      _id,
      ...rest
    } = mongoModel;

    return Voteprop.create(
      custodian || '',
      proposal_id || '',
      vote || '',
      dac_id || '',
      _id instanceof MongoDB.ObjectId ? _id.toString() : undefined,
      rest
    );
  }
}


// Raw mappers
export class VotepropRawMapper
  extends MapperImpl<Voteprop, VotepropRawModel>
{
  public fromEntity(entity: Voteprop): VotepropRawModel {
    throw new Error('Method not implemented');
  }

  public toEntity(rawModel: VotepropRawModel): Voteprop {
    const { 
      custodian,
      proposal_id,
      vote,
      dac_id,
      ...rest
    } = rawModel;

    return Voteprop.create(
      custodian || '',
      proposal_id || '',
      vote || '',
      dac_id || '',
      undefined,
      rest
    );
  }
}

