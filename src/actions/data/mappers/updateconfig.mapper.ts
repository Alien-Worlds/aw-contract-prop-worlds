/**
 * Auto generated. DO NOT edit manually.
 * Last updated on: Thu, 27 Jul 2023 15:06:33 GMT
 */

import { MapperImpl } from '@alien-worlds/aw-core';
import { MongoDB, MongoMapper } from '@alien-worlds/aw-storage-mongodb';
import { Updateconfig,  Config  } from "../../domain/entities";
import { UpdateconfigMongoModel, UpdateconfigRawModel,  ConfigMongoModel, ConfigRawModel  } from "../dtos/updateconfig.dto";

// Mongo Mappers
export class UpdateconfigMongoMapper
  extends MongoMapper<Updateconfig, UpdateconfigMongoModel>
{
  constructor() {
    super();

    this.mappingFromEntity.set('newConfig', { 
      key: 'new_config', 
      mapper: (value: Config) => new ConfigMongoMapper().fromEntity(value),
    });

    this.mappingFromEntity.set('dacId', { 
      key: 'dac_id', 
      mapper: (value: string) => value,
    });

  }

  public toEntity(mongoModel: UpdateconfigMongoModel): Updateconfig {
    const { 
      new_config,
      dac_id,
      _id,
      ...rest
    } = mongoModel;

    return Updateconfig.create(
      new_config ? new ConfigMongoMapper().toEntity(new_config) : Config.getDefault(),
      dac_id || '',
      _id instanceof MongoDB.ObjectId ? _id.toString() : undefined,
      rest
    );
  }
}

export class ConfigMongoMapper
  extends MongoMapper<Config, ConfigMongoModel>
{
  constructor() {
    super();

    this.mappingFromEntity.set('proposalThreshold', { 
      key: 'proposal_threshold', 
      mapper: (value: number) => value,
    });

    this.mappingFromEntity.set('finalizeThreshold', { 
      key: 'finalize_threshold', 
      mapper: (value: number) => value,
    });

    this.mappingFromEntity.set('approvalDuration', { 
      key: 'approval_duration', 
      mapper: (value: number) => value,
    });

  }

  public toEntity(mongoModel: ConfigMongoModel): Config {
    const { 
      proposal_threshold,
      finalize_threshold,
      approval_duration,
      _id,
      ...rest
    } = mongoModel;

    return Config.create(
      proposal_threshold || 0,
      finalize_threshold || 0,
      approval_duration || 0,
      _id instanceof MongoDB.ObjectId ? _id.toString() : undefined,
      rest
    );
  }
}


// Raw mappers
export class UpdateconfigRawMapper
  extends MapperImpl<Updateconfig, UpdateconfigRawModel>
{
  public fromEntity(entity: Updateconfig): UpdateconfigRawModel {
    throw new Error('Method not implemented');
  }

  public toEntity(rawModel: UpdateconfigRawModel): Updateconfig {
    const { 
      new_config,
      dac_id,
      ...rest
    } = rawModel;

    return Updateconfig.create(
      new_config ? new ConfigRawMapper().toEntity(new_config) : Config.getDefault(),
      dac_id || '',
      undefined,
      rest
    );
  }
}

export class ConfigRawMapper
  extends MapperImpl<Config, ConfigRawModel>
{
  public fromEntity(entity: Config): ConfigRawModel {
    throw new Error('Method not implemented');
  }

  public toEntity(rawModel: ConfigRawModel): Config {
    const { 
      proposal_threshold,
      finalize_threshold,
      approval_duration,
      ...rest
    } = rawModel;

    return Config.create(
      proposal_threshold || 0,
      finalize_threshold || 0,
      approval_duration || 0,
      undefined,
      rest
    );
  }
}

