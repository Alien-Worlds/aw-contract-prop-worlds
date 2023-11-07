/**
 * Auto generated. DO NOT edit manually.
 * Last updated on: Thu, 27 Jul 2023 15:06:33 GMT
 */

import { MongoDB } from '@alien-worlds/aw-storage-mongodb';

import { ArbapproveMongoModel, ArbapproveRawModel } from './arbapprove.dto';
import { ArbdenyMongoModel, ArbdenyRawModel } from './arbdeny.dto';
import { CancelpropMongoModel, CancelpropRawModel } from './cancelprop.dto';
import { CancelwipMongoModel, CancelwipRawModel } from './cancelwip.dto';
import {
  ClearexppropMongoModel,
  ClearexppropRawModel,
} from './clearexpprop.dto';
import { CommentMongoModel, CommentRawModel } from './comment.dto';
import {
  CompleteworkMongoModel,
  CompleteworkRawModel,
} from './completework.dto';
import { CreatepropMongoModel, CreatepropRawModel } from './createprop.dto';
import { DelegatecatMongoModel, DelegatecatRawModel } from './delegatecat.dto';
import {
  DelegatevoteMongoModel,
  DelegatevoteRawModel,
} from './delegatevote.dto';
import { DisputeMongoModel, DisputeRawModel } from './dispute.dto';
import { FinalizeMongoModel, FinalizeRawModel } from './finalize.dto';
import { StartworkMongoModel, StartworkRawModel } from './startwork.dto';
import {
  UndelegatecaMongoModel,
  UndelegatecaRawModel,
} from './undelegateca.dto';
import {
  UpdateconfigMongoModel,
  UpdateconfigRawModel,
} from './updateconfig.dto';
import {
  UpdpropvotesMongoModel,
  UpdpropvotesRawModel,
} from './updpropvotes.dto';
import { VotepropMongoModel, VotepropRawModel } from './voteprop.dto';
import { VotepropfinMongoModel, VotepropfinRawModel } from './votepropfin.dto';

export type DataDocumentType =
  | ArbapproveMongoModel
  | ArbdenyMongoModel
  | CancelpropMongoModel
  | CancelwipMongoModel
  | ClearexppropMongoModel
  | CommentMongoModel
  | CompleteworkMongoModel
  | CreatepropMongoModel
  | DelegatecatMongoModel
  | DelegatevoteMongoModel
  | DisputeMongoModel
  | FinalizeMongoModel
  | StartworkMongoModel
  | UndelegatecaMongoModel
  | UpdateconfigMongoModel
  | UpdpropvotesMongoModel
  | VotepropMongoModel
  | VotepropfinMongoModel;

export type DataRawType =
  | ArbapproveRawModel
  | ArbdenyRawModel
  | CancelpropRawModel
  | CancelwipRawModel
  | ClearexppropRawModel
  | CommentRawModel
  | CompleteworkRawModel
  | CreatepropRawModel
  | DelegatecatRawModel
  | DelegatevoteRawModel
  | DisputeRawModel
  | FinalizeRawModel
  | StartworkRawModel
  | UndelegatecaRawModel
  | UpdateconfigRawModel
  | UpdpropvotesRawModel
  | VotepropRawModel
  | VotepropfinRawModel;

export type PropWorldsActionMongoModel = {
  _id?: MongoDB.ObjectId;
  block_timestamp?: Date;
  block_num?: MongoDB.Long;
  global_sequence?: MongoDB.Long;
  recv_sequence?: MongoDB.Long;
  trx_id?: string;
  action_hash?: string;
  action?: {
    account: string;
    name: string;
    data: DataDocumentType;
  };
};

export type PropWorldsActionRawModel = {
  account: string;
  name: string;
  block_timestamp: Date;
  block_num: string;
  global_sequence: string;
  recv_sequence: string;
  transaction_id: string;
  data: DataRawType;
  [key: string]: unknown;
};
