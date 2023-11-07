/**
 * Auto generated. DO NOT edit manually.
 * Last updated on: Thu, 27 Jul 2023 15:06:33 GMT
 */

import {
  Arbapprove,
  Arbdeny,
  Cancelprop,
  Cancelwip,
  Clearexpprop,
  Comment,
  Completework,
  Createprop,
  Delegatecat,
  Delegatevote,
  Dispute,
  Finalize,
  Startwork,
  Undelegateca,
  Updateconfig,
  Updpropvotes,
  Voteprop,
  Votepropfin,
} from '../../domain/entities';
import {
  ContractAction,
  MapperImpl,
  parseToBigInt,
} from '@alien-worlds/aw-core';

import {
  ArbapproveMongoMapper,
  ArbapproveRawMapper,
} from './arbapprove.mapper';
import { ArbdenyMongoMapper, ArbdenyRawMapper } from './arbdeny.mapper';
import {
  CancelpropMongoMapper,
  CancelpropRawMapper,
} from './cancelprop.mapper';
import { CancelwipMongoMapper, CancelwipRawMapper } from './cancelwip.mapper';
import {
  ClearexppropMongoMapper,
  ClearexppropRawMapper,
} from './clearexpprop.mapper';
import { CommentMongoMapper, CommentRawMapper } from './comment.mapper';
import {
  CompleteworkMongoMapper,
  CompleteworkRawMapper,
} from './completework.mapper';
import {
  CreatepropMongoMapper,
  CreatepropRawMapper,
} from './createprop.mapper';
import {
  DelegatecatMongoMapper,
  DelegatecatRawMapper,
} from './delegatecat.mapper';
import {
  DelegatevoteMongoMapper,
  DelegatevoteRawMapper,
} from './delegatevote.mapper';
import { DisputeMongoMapper, DisputeRawMapper } from './dispute.mapper';
import { FinalizeMongoMapper, FinalizeRawMapper } from './finalize.mapper';
import { StartworkMongoMapper, StartworkRawMapper } from './startwork.mapper';
import {
  UndelegatecaMongoMapper,
  UndelegatecaRawMapper,
} from './undelegateca.mapper';
import {
  UpdateconfigMongoMapper,
  UpdateconfigRawMapper,
} from './updateconfig.mapper';
import {
  UpdpropvotesMongoMapper,
  UpdpropvotesRawMapper,
} from './updpropvotes.mapper';
import { VotepropMongoMapper, VotepropRawMapper } from './voteprop.mapper';
import {
  VotepropfinMongoMapper,
  VotepropfinRawMapper,
} from './votepropfin.mapper';
import { MongoDB, MongoMapper } from '@alien-worlds/aw-storage-mongodb';
import { DataEntityType } from '../../domain/entities/prop-worlds-action';
import {
  PropWorldsActionMongoModel,
  PropWorldsActionRawModel,
  ArbapproveMongoModel,
  ArbapproveRawModel,
  ArbdenyMongoModel,
  ArbdenyRawModel,
  CancelpropMongoModel,
  CancelpropRawModel,
  CancelwipMongoModel,
  CancelwipRawModel,
  ClearexppropMongoModel,
  ClearexppropRawModel,
  CommentMongoModel,
  CommentRawModel,
  CompleteworkMongoModel,
  CompleteworkRawModel,
  CreatepropMongoModel,
  CreatepropRawModel,
  DelegatecatMongoModel,
  DelegatecatRawModel,
  DelegatevoteMongoModel,
  DelegatevoteRawModel,
  DisputeMongoModel,
  DisputeRawModel,
  FinalizeMongoModel,
  FinalizeRawModel,
  StartworkMongoModel,
  StartworkRawModel,
  UndelegatecaMongoModel,
  UndelegatecaRawModel,
  UpdateconfigMongoModel,
  UpdateconfigRawModel,
  UpdpropvotesMongoModel,
  UpdpropvotesRawModel,
  VotepropMongoModel,
  VotepropRawModel,
  VotepropfinMongoModel,
  VotepropfinRawModel,
} from '../dtos';
import { PropWorldsActionName } from '../../domain/enums';

// Mongo Mapper
export class PropWorldsActionMongoMapper extends MongoMapper<
  ContractAction<DataEntityType>,
  PropWorldsActionMongoModel
> {
  public fromEntity(
    entity: ContractAction<DataEntityType>
  ): PropWorldsActionMongoModel {
    let entityData;
    switch (entity.name) {
      case PropWorldsActionName.Arbapprove:
        entityData = new ArbapproveMongoMapper().fromEntity(
          entity.data as Arbapprove
        );
        break;
      case PropWorldsActionName.Arbdeny:
        entityData = new ArbdenyMongoMapper().fromEntity(
          entity.data as Arbdeny
        );
        break;
      case PropWorldsActionName.Cancelprop:
        entityData = new CancelpropMongoMapper().fromEntity(
          entity.data as Cancelprop
        );
        break;
      case PropWorldsActionName.Cancelwip:
        entityData = new CancelwipMongoMapper().fromEntity(
          entity.data as Cancelwip
        );
        break;
      case PropWorldsActionName.Clearexpprop:
        entityData = new ClearexppropMongoMapper().fromEntity(
          entity.data as Clearexpprop
        );
        break;
      case PropWorldsActionName.Comment:
        entityData = new CommentMongoMapper().fromEntity(
          entity.data as Comment
        );
        break;
      case PropWorldsActionName.Completework:
        entityData = new CompleteworkMongoMapper().fromEntity(
          entity.data as Completework
        );
        break;
      case PropWorldsActionName.Createprop:
        entityData = new CreatepropMongoMapper().fromEntity(
          entity.data as Createprop
        );
        break;
      case PropWorldsActionName.Delegatecat:
        entityData = new DelegatecatMongoMapper().fromEntity(
          entity.data as Delegatecat
        );
        break;
      case PropWorldsActionName.Delegatevote:
        entityData = new DelegatevoteMongoMapper().fromEntity(
          entity.data as Delegatevote
        );
        break;
      case PropWorldsActionName.Dispute:
        entityData = new DisputeMongoMapper().fromEntity(
          entity.data as Dispute
        );
        break;
      case PropWorldsActionName.Finalize:
        entityData = new FinalizeMongoMapper().fromEntity(
          entity.data as Finalize
        );
        break;
      case PropWorldsActionName.Startwork:
        entityData = new StartworkMongoMapper().fromEntity(
          entity.data as Startwork
        );
        break;
      case PropWorldsActionName.Undelegateca:
        entityData = new UndelegatecaMongoMapper().fromEntity(
          entity.data as Undelegateca
        );
        break;
      case PropWorldsActionName.Updateconfig:
        entityData = new UpdateconfigMongoMapper().fromEntity(
          entity.data as Updateconfig
        );
        break;
      case PropWorldsActionName.Updpropvotes:
        entityData = new UpdpropvotesMongoMapper().fromEntity(
          entity.data as Updpropvotes
        );
        break;
      case PropWorldsActionName.Voteprop:
        entityData = new VotepropMongoMapper().fromEntity(
          entity.data as Voteprop
        );
        break;
      case PropWorldsActionName.Votepropfin:
        entityData = new VotepropfinMongoMapper().fromEntity(
          entity.data as Votepropfin
        );
        break;
    }

    const model: PropWorldsActionMongoModel = {
      block_timestamp: entity.blockTimestamp,
      block_num: new MongoDB.Long(entity.blockNumber),
      global_sequence: new MongoDB.Long(entity.globalSequence),
      recv_sequence: new MongoDB.Long(entity.receiverSequence),
      trx_id: entity.transactionId,
      action: {
        name: entity.name,
        account: entity.account,
        data: entityData,
      },
    };

    if (entity.id && MongoDB.ObjectId.isValid(entity.id)) {
      model._id = new MongoDB.ObjectId(entity.id);
    }

    return model;
  }

  public toEntity(
    mongoModel: PropWorldsActionMongoModel
  ): ContractAction<DataEntityType> {
    let data;
    switch (mongoModel.action.name) {
      case PropWorldsActionName.Arbapprove:
        data = new ArbapproveMongoMapper().toEntity(
          mongoModel.action.data as ArbapproveMongoModel
        );
        break;
      case PropWorldsActionName.Arbdeny:
        data = new ArbdenyMongoMapper().toEntity(
          mongoModel.action.data as ArbdenyMongoModel
        );
        break;
      case PropWorldsActionName.Cancelprop:
        data = new CancelpropMongoMapper().toEntity(
          mongoModel.action.data as CancelpropMongoModel
        );
        break;
      case PropWorldsActionName.Cancelwip:
        data = new CancelwipMongoMapper().toEntity(
          mongoModel.action.data as CancelwipMongoModel
        );
        break;
      case PropWorldsActionName.Clearexpprop:
        data = new ClearexppropMongoMapper().toEntity(
          mongoModel.action.data as ClearexppropMongoModel
        );
        break;
      case PropWorldsActionName.Comment:
        data = new CommentMongoMapper().toEntity(
          mongoModel.action.data as CommentMongoModel
        );
        break;
      case PropWorldsActionName.Completework:
        data = new CompleteworkMongoMapper().toEntity(
          mongoModel.action.data as CompleteworkMongoModel
        );
        break;
      case PropWorldsActionName.Createprop:
        data = new CreatepropMongoMapper().toEntity(
          mongoModel.action.data as CreatepropMongoModel
        );
        break;
      case PropWorldsActionName.Delegatecat:
        data = new DelegatecatMongoMapper().toEntity(
          mongoModel.action.data as DelegatecatMongoModel
        );
        break;
      case PropWorldsActionName.Delegatevote:
        data = new DelegatevoteMongoMapper().toEntity(
          mongoModel.action.data as DelegatevoteMongoModel
        );
        break;
      case PropWorldsActionName.Dispute:
        data = new DisputeMongoMapper().toEntity(
          mongoModel.action.data as DisputeMongoModel
        );
        break;
      case PropWorldsActionName.Finalize:
        data = new FinalizeMongoMapper().toEntity(
          mongoModel.action.data as FinalizeMongoModel
        );
        break;
      case PropWorldsActionName.Startwork:
        data = new StartworkMongoMapper().toEntity(
          mongoModel.action.data as StartworkMongoModel
        );
        break;
      case PropWorldsActionName.Undelegateca:
        data = new UndelegatecaMongoMapper().toEntity(
          mongoModel.action.data as UndelegatecaMongoModel
        );
        break;
      case PropWorldsActionName.Updateconfig:
        data = new UpdateconfigMongoMapper().toEntity(
          mongoModel.action.data as UpdateconfigMongoModel
        );
        break;
      case PropWorldsActionName.Updpropvotes:
        data = new UpdpropvotesMongoMapper().toEntity(
          mongoModel.action.data as UpdpropvotesMongoModel
        );
        break;
      case PropWorldsActionName.Voteprop:
        data = new VotepropMongoMapper().toEntity(
          mongoModel.action.data as VotepropMongoModel
        );
        break;
      case PropWorldsActionName.Votepropfin:
        data = new VotepropfinMongoMapper().toEntity(
          mongoModel.action.data as VotepropfinMongoModel
        );
        break;
    }

    const {
      _id,
      block_timestamp,
      block_num,
      global_sequence,
      recv_sequence,
      trx_id,
      action,
    } = mongoModel;

    return new ContractAction<DataEntityType>(
      _id.toString(),
      block_timestamp,
      parseToBigInt(block_num),
      action.account,
      action.name,
      parseToBigInt(global_sequence),
      parseToBigInt(recv_sequence),
      trx_id,
      data
    );
  }
}

// Processor Task Mapper
export class PropWorldsActionProcessorTaskMapper extends MapperImpl<
  ContractAction<DataEntityType, PropWorldsActionRawModel>,
  PropWorldsActionRawModel
> {
  public fromEntity(
    entity: ContractAction<DataEntityType, PropWorldsActionRawModel>
  ): PropWorldsActionRawModel {
    throw new Error('method not implemented');
  }

  public toEntity(
    rawModel: PropWorldsActionRawModel
  ): ContractAction<DataEntityType, PropWorldsActionRawModel> {
    let data;
    switch (rawModel.name) {
      case PropWorldsActionName.Arbapprove:
        data = new ArbapproveRawMapper().toEntity(
          rawModel.data as ArbapproveRawModel
        );
        break;
      case PropWorldsActionName.Arbdeny:
        data = new ArbdenyRawMapper().toEntity(
          rawModel.data as ArbdenyRawModel
        );
        break;
      case PropWorldsActionName.Cancelprop:
        data = new CancelpropRawMapper().toEntity(
          rawModel.data as CancelpropRawModel
        );
        break;
      case PropWorldsActionName.Cancelwip:
        data = new CancelwipRawMapper().toEntity(
          rawModel.data as CancelwipRawModel
        );
        break;
      case PropWorldsActionName.Clearexpprop:
        data = new ClearexppropRawMapper().toEntity(
          rawModel.data as ClearexppropRawModel
        );
        break;
      case PropWorldsActionName.Comment:
        data = new CommentRawMapper().toEntity(
          rawModel.data as CommentRawModel
        );
        break;
      case PropWorldsActionName.Completework:
        data = new CompleteworkRawMapper().toEntity(
          rawModel.data as CompleteworkRawModel
        );
        break;
      case PropWorldsActionName.Createprop:
        data = new CreatepropRawMapper().toEntity(
          rawModel.data as CreatepropRawModel
        );
        break;
      case PropWorldsActionName.Delegatecat:
        data = new DelegatecatRawMapper().toEntity(
          rawModel.data as DelegatecatRawModel
        );
        break;
      case PropWorldsActionName.Delegatevote:
        data = new DelegatevoteRawMapper().toEntity(
          rawModel.data as DelegatevoteRawModel
        );
        break;
      case PropWorldsActionName.Dispute:
        data = new DisputeRawMapper().toEntity(
          rawModel.data as DisputeRawModel
        );
        break;
      case PropWorldsActionName.Finalize:
        data = new FinalizeRawMapper().toEntity(
          rawModel.data as FinalizeRawModel
        );
        break;
      case PropWorldsActionName.Startwork:
        data = new StartworkRawMapper().toEntity(
          rawModel.data as StartworkRawModel
        );
        break;
      case PropWorldsActionName.Undelegateca:
        data = new UndelegatecaRawMapper().toEntity(
          rawModel.data as UndelegatecaRawModel
        );
        break;
      case PropWorldsActionName.Updateconfig:
        data = new UpdateconfigRawMapper().toEntity(
          rawModel.data as UpdateconfigRawModel
        );
        break;
      case PropWorldsActionName.Updpropvotes:
        data = new UpdpropvotesRawMapper().toEntity(
          rawModel.data as UpdpropvotesRawModel
        );
        break;
      case PropWorldsActionName.Voteprop:
        data = new VotepropRawMapper().toEntity(
          rawModel.data as VotepropRawModel
        );
        break;
      case PropWorldsActionName.Votepropfin:
        data = new VotepropfinRawMapper().toEntity(
          rawModel.data as VotepropfinRawModel
        );
        break;
    }

    const {
      account,
      name,
      block_timestamp,
      block_num,
      global_sequence,
      recv_sequence,
      transaction_id,
    } = rawModel;

    return new ContractAction<DataEntityType, PropWorldsActionRawModel>(
      '',
      block_timestamp,
      parseToBigInt(block_num),
      account,
      name,
      parseToBigInt(global_sequence),
      parseToBigInt(recv_sequence),
      transaction_id,
      data
    );
  }
}
