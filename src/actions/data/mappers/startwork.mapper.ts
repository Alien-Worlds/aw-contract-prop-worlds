/**
 * Auto generated. DO NOT edit manually.
 * Last updated on: Wed, 12 Jul 2023 11:36:10 GMT
 */

import { MapperImpl } from '@alien-worlds/api-core';
import { MongoDB } from '@alien-worlds/storage-mongodb';
import { Startwork  } from "../../domain/entities";
import { StartworkMongoModel, StartworkRawModel  } from "../dtos/startwork.dto";

// Mongo Mappers
export class StartworkMongoMapper
  extends MapperImpl<Startwork, StartworkMongoModel>
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

  public toEntity(mongoModel: StartworkMongoModel): Startwork {
    const { 
      proposal_id,
      dac_id,
      _id,
      ...rest
    } = mongoModel;

    return Startwork.create(
      proposal_id || '',
      dac_id || '',
      _id instanceof MongoDB.ObjectId ? _id.toString() : undefined,
      rest
    );
  }
}


// Raw mappers
export class StartworkRawMapper
  extends MapperImpl<Startwork, StartworkRawModel>
{
  public fromEntity(entity: Startwork): StartworkRawModel {
    throw new Error('Method not implemented');
  }

  public toEntity(rawModel: StartworkRawModel): Startwork {
    const { 
      proposal_id,
      dac_id,
      ...rest
    } = rawModel;

    return Startwork.create(
      proposal_id || '',
      dac_id || '',
      undefined,
      rest
    );
  }
}

