/**
 * Auto generated. DO NOT edit manually.
 * Last updated on: Mon, 10 Jul 2023 08:57:16 GMT
 */

import {
  MapperImpl,
  parseToBigInt,
} from '@alien-worlds/api-core';
import { MongoDB } from '@alien-worlds/storage-mongodb';
import { Configs,  PairStringStateValueVariant  } from "../../domain/entities";
import { ConfigsMongoModel, ConfigsRawModel,  PairStringStateValueVariantMongoModel, PairStringStateValueVariantRawModel  } from "../dtos/configs.dto";

// Mongo Mappers
export class ConfigsMongoMapper
  extends MapperImpl<Configs, ConfigsMongoModel>
{
  constructor() {
    super();

    this.mappingFromEntity.set('data', { 
      key: 'data', 
      mapper: (value: PairStringStateValueVariant[]) => 
        value.map(new PairStringStateValueVariantMongoMapper().fromEntity),
    });

  }

  public toEntity(mongoModel: ConfigsMongoModel): Configs {
    const { 
      data,
      _id, 
      ...rest
    } = mongoModel;

    return Configs.create(
        data?.map(new PairStringStateValueVariantMongoMapper().toEntity) ?? []
,
      _id instanceof MongoDB.ObjectId ? _id.toString() : undefined,
      rest
    );
  }
}

export class PairStringStateValueVariantMongoMapper
  extends MapperImpl<PairStringStateValueVariant, PairStringStateValueVariantMongoModel>
{
  constructor() {
    super();

    this.mappingFromEntity.set('key', { 
      key: 'key', 
      mapper: (value: string) => 
        value,
    });

    this.mappingFromEntity.set('value', { 
      key: 'value', 
      mapper: (value: Array<unknown>) => 
        value,
    });

  }

  public toEntity(mongoModel: PairStringStateValueVariantMongoModel): PairStringStateValueVariant {
    const { 
      key,
      value,
      _id, 
      ...rest
    } = mongoModel;

    return PairStringStateValueVariant.create(
        key ?? '',
        value ?? [],
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
        data?.map(new PairStringStateValueVariantRawMapper().toEntity) ?? []
,
      undefined,
      rest
    );
  }
}

export class PairStringStateValueVariantRawMapper
  extends MapperImpl<PairStringStateValueVariant, PairStringStateValueVariantRawModel>
{
  public fromEntity(entity: PairStringStateValueVariant): PairStringStateValueVariantRawModel {
    throw new Error('Method not implemented');
  }

  public toEntity(rawModel: PairStringStateValueVariantRawModel): PairStringStateValueVariant {
    const { 
      key,
      value,
      ...rest
    } = rawModel;

    return PairStringStateValueVariant.create(
        key ?? '',
        value ?? [],
      undefined,
      rest
    );
  }
}

