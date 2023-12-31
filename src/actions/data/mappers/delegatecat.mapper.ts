/**
 * Auto generated. DO NOT edit manually.
 * Last updated on: Thu, 27 Jul 2023 15:06:33 GMT
 */

import { MapperImpl } from '@alien-worlds/aw-core';
import { MongoDB, MongoMapper } from '@alien-worlds/aw-storage-mongodb';
import { Delegatecat  } from "../../domain/entities";
import { DelegatecatMongoModel, DelegatecatRawModel  } from "../dtos/delegatecat.dto";

// Mongo Mappers
export class DelegatecatMongoMapper
  extends MongoMapper<Delegatecat, DelegatecatMongoModel>
{
  constructor() {
    super();

    this.mappingFromEntity.set('custodian', { 
      key: 'custodian', 
      mapper: (value: string) => value,
    });

    this.mappingFromEntity.set('category', { 
      key: 'category', 
      mapper: (value: number) => value,
    });

    this.mappingFromEntity.set('delegateeCustodian', { 
      key: 'delegatee_custodian', 
      mapper: (value: string) => value,
    });

    this.mappingFromEntity.set('dacId', { 
      key: 'dac_id', 
      mapper: (value: string) => value,
    });

  }

  public toEntity(mongoModel: DelegatecatMongoModel): Delegatecat {
    const { 
      custodian,
      category,
      delegatee_custodian,
      dac_id,
      _id,
      ...rest
    } = mongoModel;

    return Delegatecat.create(
      custodian || '',
      category || 0,
      delegatee_custodian || '',
      dac_id || '',
      _id instanceof MongoDB.ObjectId ? _id.toString() : undefined,
      rest
    );
  }
}


// Raw mappers
export class DelegatecatRawMapper
  extends MapperImpl<Delegatecat, DelegatecatRawModel>
{
  public fromEntity(entity: Delegatecat): DelegatecatRawModel {
    throw new Error('Method not implemented');
  }

  public toEntity(rawModel: DelegatecatRawModel): Delegatecat {
    const { 
      custodian,
      category,
      delegatee_custodian,
      dac_id,
      ...rest
    } = rawModel;

    return Delegatecat.create(
      custodian || '',
      category || 0,
      delegatee_custodian || '',
      dac_id || '',
      undefined,
      rest
    );
  }
}

