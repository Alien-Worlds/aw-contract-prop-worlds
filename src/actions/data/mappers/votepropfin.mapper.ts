/**
 * Auto generated. DO NOT edit manually.
 * Last updated on: Thu, 27 Jul 2023 15:06:33 GMT
 */

import { MapperImpl } from '@alien-worlds/aw-core';
import { MongoDB, MongoMapper } from '@alien-worlds/aw-storage-mongodb';
import { Votepropfin  } from "../../domain/entities";
import { VotepropfinMongoModel, VotepropfinRawModel  } from "../dtos/votepropfin.dto";

// Mongo Mappers
export class VotepropfinMongoMapper
  extends MongoMapper<Votepropfin, VotepropfinMongoModel>
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
      custodian || '',
      proposal_id || '',
      vote || '',
      dac_id || '',
      undefined,
      rest
    );
  }
}

