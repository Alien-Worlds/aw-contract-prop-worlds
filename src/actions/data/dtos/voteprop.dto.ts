/**
 * Auto generated. DO NOT edit manually.
 * Last updated on: Wed, 12 Jul 2023 11:36:10 GMT
 */

import { MongoDB } from '@alien-worlds/storage-mongodb';

/**
 * MongoDB Model(s) - Types representing data from MongoDB
 */

/**
 * @typedef {Object} VotepropMongoModel
 */
export type VotepropMongoModel = {
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
 * @typedef {Object} VotepropRawModel
 */
export type VotepropRawModel = {
  custodian?: string;
  proposal_id?: string;
  vote?: string;
  dac_id?: string;
  [key: string]: unknown;
};

