/**
 * Auto generated. DO NOT edit manually.
 * Last updated on: Thu, 27 Jul 2023 15:06:33 GMT
 */

import { MapperImpl } from '@alien-worlds/aw-core';
import { MongoDB, MongoMapper } from '@alien-worlds/aw-storage-mongodb';
import { Pair, PairMongoMapper, PairRawMapper } from '@alien-worlds/aw-antelope';
import { Configs  } from "../../domain/entities";
import { ConfigsMongoModel, ConfigsRawModel  } from "../dtos/configs.dto";

// Mongo Mappers
export class ConfigsMongoMapper
  extends MongoMapper<Configs, ConfigsMongoModel>
{
  constructor() {
    super();

    this.mappingFromEntity.set('data', { 
      key: 'data', 
      mapper: (values: Pair[]) => values.map(value => new PairMongoMapper().fromEntity(value)),
    });

  }

  public toEntity(mongoModel: ConfigsMongoModel): Configs {
    const { 
      data,
      _id,
      ...rest
    } = mongoModel;

    return Configs.create(
      data?.map(value => new PairMongoMapper().toEntity(value)) || [],
      _id instanceof MongoDB.ObjectId ? _id.toString() : undefined,
      rest
    );
  }
}


// Raw mappers
export class ConfigsRawMapper
  extends MapperImpl<Configs, ConfigsRawModel>
{
  public fromEntity(entity: Configs): ConfigsRawModel {
    throw new Error('Method not implemented');
  }

  public toEntity(rawModel: ConfigsRawModel): Configs {
    const { 
      data,
      ...rest
    } = rawModel;

    return Configs.create(
      data?.map(value => new PairRawMapper().toEntity(value)) || [],
      undefined,
      rest
    );
  }
}

