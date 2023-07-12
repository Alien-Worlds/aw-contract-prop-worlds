/**
 * Auto generated. DO NOT edit manually.
 * Last updated on: Wed, 12 Jul 2023 11:36:10 GMT
 */


import { 
  Configs,
  Proposals,
  Propvotes,
} from '../../domain/entities';
import { ContractDelta, MapperImpl, parseToBigInt } from '@alien-worlds/api-core';
import { MongoDB } from '@alien-worlds/storage-mongodb';
import { DataEntityType } from '../../domain/entities/prop-worlds-delta';
import { PropWorldsDeltaMongoModel, PropWorldsDeltaRawModel } from '../dtos';
import { PropWorldsTableName } from '../../domain/enums';
import { ConfigsMongoMapper, ConfigsRawMapper } from "./configs.mapper";
import { ProposalsMongoMapper, ProposalsRawMapper } from "./proposals.mapper";
import { PropvotesMongoMapper, PropvotesRawMapper } from "./propvotes.mapper";

// Mongo Mapper
export class PropWorldsDeltaMongoMapper
  extends MapperImpl<ContractDelta<DataEntityType>, PropWorldsDeltaMongoModel>
{
  public fromEntity(
    entity: ContractDelta<DataEntityType>
  ): PropWorldsDeltaMongoModel {
    let entityData;
    switch (entity.table) {
      case PropWorldsTableName.Configs:
        entityData = new ConfigsMongoMapper().fromEntity(
          entity.data as Configs
        );
        break;
      case PropWorldsTableName.Proposals:
        entityData = new ProposalsMongoMapper().fromEntity(
          entity.data as Proposals
        );
        break;
      case PropWorldsTableName.Propvotes:
        entityData = new PropvotesMongoMapper().fromEntity(
          entity.data as Propvotes
        );
        break;
    }

    return {
      _id: new MongoDB.ObjectId(entity.id),
      block_timestamp: entity.blockTimestamp,
      block_number: new MongoDB.Long(entity.blockNumber),
      code: entity.code,
      scope: entity.scope,
      table: entity.table,
      data: entityData,
      payer: entity.payer,
      primary_key: new MongoDB.Long(entity.primaryKey),
      present: entity.present,
    };
  }

  public toEntity(
    mongoModel: PropWorldsDeltaMongoModel
  ): ContractDelta<DataEntityType> {
    let data;
    switch (mongoModel.table) {
      case PropWorldsTableName.Configs:
        data = new ConfigsMongoMapper().toEntity(mongoModel.data);
        break;
      case PropWorldsTableName.Proposals:
        data = new ProposalsMongoMapper().toEntity(mongoModel.data);
        break;
      case PropWorldsTableName.Propvotes:
        data = new PropvotesMongoMapper().toEntity(mongoModel.data);
        break;
    }

    const {
      _id,
      block_number,
      code,
      scope,
      table,
      payer,
      primary_key,
      present,
      block_timestamp,
    } = mongoModel;

    return new ContractDelta<DataEntityType>(
      _id.toString(),
      parseToBigInt(block_number),
      code,
      scope,
      table,
      data,
      payer,
      parseToBigInt(primary_key),
      present,
      block_timestamp
    );
  }
}

// Processor Task Mapper
export class PropWorldsDeltaProcessorTaskMapper extends MapperImpl<
  ContractDelta<DataEntityType, PropWorldsDeltaRawModel>, 
    PropWorldsDeltaRawModel
> {
  public fromEntity(
    entity: ContractDelta<DataEntityType, PropWorldsDeltaRawModel>
  ): PropWorldsDeltaRawModel {
    throw new Error('method not implemented');
  }

  public toEntity(
    rawModel: PropWorldsDeltaRawModel
  ): ContractDelta<DataEntityType, PropWorldsDeltaRawModel> {
    let data;
    switch (rawModel.table) {
      case PropWorldsTableName.Configs:
        data = new ConfigsRawMapper().toEntity(rawModel.data);
        break;
      case PropWorldsTableName.Proposals:
        data = new ProposalsRawMapper().toEntity(rawModel.data);
        break;
      case PropWorldsTableName.Propvotes:
        data = new PropvotesRawMapper().toEntity(rawModel.data);
        break;
    }

    const {
      block_number,
      code,
      scope,
      table,
      payer,
      primary_key,
      present,
      block_timestamp,
    } = rawModel;

    return new ContractDelta<DataEntityType, PropWorldsDeltaRawModel>(
      '',
      parseToBigInt(block_number),
      code,
      scope,
      table,
      data,
      payer,
      parseToBigInt(primary_key),
      present,
      block_timestamp,
    );
  }
}