/**
 * Auto generated. DO NOT edit manually.
 * Last updated on: Fri, 14 Jul 2023 17:54:32 GMT
 */

import { MongoDB } from '@alien-worlds/storage-mongodb';

/**
 * MongoDB Model(s) - Types representing data from MongoDB
 */

/**
 * @typedef {Object} ArbdenyMongoModel
 */
export type ArbdenyMongoModel = {
  _id?: MongoDB.ObjectId;
  arbitrator?: string;
  proposal_id?: string;
  dac_id?: string;
  [key: string]: unknown;
};

/**
 * Raw Model(s) - Types representing data from blockchain
 */

/**
 * @typedef {Object} ArbdenyRawModel
 */
export type ArbdenyRawModel = {
  arbitrator?: string;
  proposal_id?: string;
  dac_id?: string;
  [key: string]: unknown;
};

