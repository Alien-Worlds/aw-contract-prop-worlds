/**
 * Auto generated. DO NOT edit manually.
 * Last updated on: Thu, 27 Jul 2023 15:06:33 GMT
 */

import { MongoDB } from '@alien-worlds/aw-storage-mongodb';
import { ExtendedAssetMongoModel, ExtendedAssetRawModel } from '@alien-worlds/aw-antelope';

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

