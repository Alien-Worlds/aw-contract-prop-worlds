/**
 * Auto generated. DO NOT edit manually.
 * Last updated on: Thu, 27 Jul 2023 15:06:33 GMT
 */

import { MongoDB } from '@alien-worlds/aw-storage-mongodb';

import { ConfigsMongoModel, ConfigsRawModel } from './configs.dto';
import { ProposalsMongoModel, ProposalsRawModel } from './proposals.dto';
import { PropvotesMongoModel, PropvotesRawModel } from './propvotes.dto';

export type DataDocumentType =
  | ConfigsMongoModel
  | ProposalsMongoModel
  | PropvotesMongoModel;

export type DataRawType =
  | ConfigsRawModel
  | ProposalsRawModel
  | PropvotesRawModel;

export type PropWorldsDeltaMongoModel = {
  _id?: MongoDB.ObjectId;
  block_num?: MongoDB.Long;
  code?: string;
  scope?: string;
  table?: string;
  data_hash?: string;
  data?: DataDocumentType;
  payer?: string;
  primary_key?: MongoDB.Long;
  present?: boolean;
  block_timestamp?: Date;
};

export type PropWorldsDeltaRawModel = {
  block_timestamp: Date;
  block_num: string;
  code: string;
  scope: string;
  table: string;
  payer: string;
  primary_key: string;
  present: boolean;
  data: DataRawType;
};
