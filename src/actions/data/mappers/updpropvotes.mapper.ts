/**
 * Auto generated. DO NOT edit manually.
 * Last updated on: Wed, 12 Jul 2023 11:36:10 GMT
 */

import { MapperImpl } from '@alien-worlds/api-core';
import { MongoDB } from '@alien-worlds/storage-mongodb';
import { Updpropvotes  } from "../../domain/entities";
import { UpdpropvotesMongoModel, UpdpropvotesRawModel  } from "../dtos/updpropvotes.dto";

// Mongo Mappers
export class UpdpropvotesMongoMapper
  extends MapperImpl<Updpropvotes, UpdpropvotesMongoModel>
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

  public toEntity(mongoModel: UpdpropvotesMongoModel): Updpropvotes {
    const { 
      proposal_id,
      dac_id,
      _id,
      ...rest
    } = mongoModel;

    return Updpropvotes.create(
      proposal_id || '',
      dac_id || '',
      _id instanceof MongoDB.ObjectId ? _id.toString() : undefined,
      rest
    );
  }
}


// Raw mappers
export class UpdpropvotesRawMapper
  extends MapperImpl<Updpropvotes, UpdpropvotesRawModel>
{
  public fromEntity(entity: Updpropvotes): UpdpropvotesRawModel {
    throw new Error('Method not implemented');
  }

  public toEntity(rawModel: UpdpropvotesRawModel): Updpropvotes {
    const { 
      proposal_id,
      dac_id,
      ...rest
    } = rawModel;

    return Updpropvotes.create(
      proposal_id || '',
      dac_id || '',
      undefined,
      rest
    );
  }
}

