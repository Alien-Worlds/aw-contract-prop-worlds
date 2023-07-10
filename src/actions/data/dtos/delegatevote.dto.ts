/**
 * Auto generated. DO NOT edit manually.
 * Last updated on: Mon, 10 Jul 2023 08:57:16 GMT
 */

import { MongoDB } from '@alien-worlds/storage-mongodb';

/**
 * MongoDB Model(s) - Types representing data from MongoDB
 */

/**
 * @typedef {Object} DelegatevoteMongoModel
 */
export type DelegatevoteMongoModel = {
  _id?: MongoDB.ObjectId;
  custodian?: string;
  proposal_id?: string;
  delegatee_custodian?: string;
  dac_id?: string;
  [key: string]: unknown;
};

/**
 * Raw Model(s) - Types representing data from blockchain
 */

/**
 * @typedef {Object} DelegatevoteRawModel
 */
export type DelegatevoteRawModel = {
  custodian?: string;
  proposal_id?: string;
  delegatee_custodian?: string;
  dac_id?: string;
  [key: string]: unknown;
};
