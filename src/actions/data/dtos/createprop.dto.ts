/**
 * Auto generated. DO NOT edit manually.
 * Last updated on: Wed, 12 Jul 2023 11:36:10 GMT
 */

import { MongoDB } from '@alien-worlds/storage-mongodb';
import { ExtendedAssetMongoModel, ExtendedAssetRawModel } from '@alien-worlds/eosio-contract-types';

/**
 * MongoDB Model(s) - Types representing data from MongoDB
 */

/**
 * @typedef {Object} CreatepropMongoModel
 */
export type CreatepropMongoModel = {
  _id?: MongoDB.ObjectId;
  proposer?: string;
  title?: string;
  summary?: string;
  arbitrator?: string;
  proposal_pay?: ExtendedAssetMongoModel;
  arbitrator_pay?: ExtendedAssetMongoModel;
  content_hash?: string;
  id?: string;
  category?: number;
  job_duration?: number;
  dac_id?: string;
  [key: string]: unknown;
};

/**
 * Raw Model(s) - Types representing data from blockchain
 */

/**
 * @typedef {Object} CreatepropRawModel
 */
export type CreatepropRawModel = {
  proposer?: string;
  title?: string;
  summary?: string;
  arbitrator?: string;
  proposal_pay?: ExtendedAssetRawModel;
  arbitrator_pay?: ExtendedAssetRawModel;
  content_hash?: string;
  id?: string;
  category?: number;
  job_duration?: number;
  dac_id?: string;
  [key: string]: unknown;
};

