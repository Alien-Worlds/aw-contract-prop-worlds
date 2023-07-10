/**
 * Auto generated. DO NOT edit manually.
 * Last updated on: Mon, 10 Jul 2023 08:57:16 GMT
 */

import {
  MapperImpl,
  parseToBigInt,
} from '@alien-worlds/api-core';
import { MongoDB } from '@alien-worlds/storage-mongodb';
import { Undelegateca  } from "../../domain/entities";
import { UndelegatecaMongoModel, UndelegatecaRawModel  } from "../dtos/undelegateca.dto";

// Mongo Mappers
export class UndelegatecaMongoMapper
  extends MapperImpl<Undelegateca, UndelegatecaMongoModel>
{
  constructor() {
    super();

    this.mappingFromEntity.set('custodian', { 
      key: 'custodian', 
      mapper: (value: string) => 
        value,
    });

    this.mappingFromEntity.set('category', { 
      key: 'category', 
      mapper: (value: bigint) => MongoDB.Long.fromBigInt(value),
    });

    this.mappingFromEntity.set('dacId', { 
      key: 'dac_id', 
      mapper: (value: string) => 
        value,
    });

  }

  public toEntity(mongoModel: UndelegatecaMongoModel): Undelegateca {
    const { 
      custodian,
      category,
      dac_id,
      _id, 
      ...rest
    } = mongoModel;

    return Undelegateca.create(
        custodian ?? '',
        category.toBigInt() ?? 0n,
        dac_id ?? '',
      _id instanceof MongoDB.ObjectId ? _id.toString() : undefined,
      rest
    );
  }
}


// Raw mappers
export class UndelegatecaRawMapper
  extends MapperImpl<Undelegateca, UndelegatecaRawModel>
{
  public fromEntity(entity: Undelegateca): UndelegatecaRawModel {
    throw new Error('Method not implemented');
  }

  public toEntity(rawModel: UndelegatecaRawModel): Undelegateca {
    const { 
      custodian,
      category,
      dac_id,
      ...rest
    } = rawModel;

    return Undelegateca.create(
        custodian ?? '',
      parseToBigInt(category ?? 0n),
        dac_id ?? '',
      undefined,
      rest
    );
  }
}

