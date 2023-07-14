/**
 * Auto generated. DO NOT edit manually.
 * Last updated on: Fri, 14 Jul 2023 19:20:53 GMT
 */

import { MongoDB } from '@alien-worlds/storage-mongodb';
import { ExtendedAssetMongoModel, ExtendedAssetRawModel } from '@alien-worlds/eosio-contract-types';

/**
 * MongoDB Model(s) - Types representing data from MongoDB
 */

/**
 * @typedef {Object} ProposalsMongoModel
 */
export type ProposalsMongoModel = {
  _id?: MongoDB.ObjectId;
  proposal_id?: string;
  proposer?: string;
  arbitrator?: string;
  content_hash?: string;
  proposal_pay?: ExtendedAssetMongoModel;
  arbitrator_pay?: ExtendedAssetMongoModel;
  state?: string;
  expiry?: Date;
  job_duration?: number;
  category?: number;
  [key: string]: unknown;
};

/**
 * Raw Model(s) - Types representing data from blockchain
 */

/**
 * @typedef {Object} ProposalsRawModel
 */
export type ProposalsRawModel = {
  proposal_id?: string;
  proposer?: string;
  arbitrator?: string;
  content_hash?: string;
  proposal_pay?: ExtendedAssetRawModel;
  arbitrator_pay?: ExtendedAssetRawModel;
  state?: string;
  expiry?: Date;
  job_duration?: number;
  category?: number;
  [key: string]: unknown;
};

