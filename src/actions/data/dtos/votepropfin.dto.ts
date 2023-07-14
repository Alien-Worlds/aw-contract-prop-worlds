/**
 * Auto generated. DO NOT edit manually.
 * Last updated on: Fri, 14 Jul 2023 17:08:56 GMT
 */

import { MongoDB } from '@alien-worlds/storage-mongodb';

/**
 * MongoDB Model(s) - Types representing data from MongoDB
 */

/**
 * @typedef {Object} VotepropfinMongoModel
 */
export type VotepropfinMongoModel = {
  _id?: MongoDB.ObjectId;
  custodian?: string;
  proposal_id?: string;
  vote?: string;
  dac_id?: string;
  [key: string]: unknown;
};

/**
 * Raw Model(s) - Types representing data from blockchain
 */

/**
 * @typedef {Object} VotepropfinRawModel
 */
export type VotepropfinRawModel = {
  custodian?: string;
  proposal_id?: string;
  vote?: string;
  dac_id?: string;
  [key: string]: unknown;
};

