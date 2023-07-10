/**
 * Auto generated. DO NOT edit manually.
 * Last updated on: Mon, 10 Jul 2023 08:57:16 GMT
 */

import { MongoDB } from '@alien-worlds/storage-mongodb';

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
  block_number?: MongoDB.Long;
  code?: string;
  scope?: string;
  table?: string;
  data_hash?: string;
  data?: DataDocumentType;
  payer?: string;
  primary_key?: MongoDB.Long,
  present?: boolean;
  block_timestamp?: Date;
};

export type PropWorldsDeltaRawModel = {
  block_timestamp: Date;
  block_number: string;
  code: string;
  scope: string;
  table: string;
  payer: string;
  primary_key: string;
  present: boolean;
  data: DataRawType;
};
