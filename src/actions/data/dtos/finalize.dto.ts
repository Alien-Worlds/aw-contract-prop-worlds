/**
 * Auto generated. DO NOT edit manually.
 * Last updated on: Thu, 27 Jul 2023 15:06:33 GMT
 */

import { MongoDB } from '@alien-worlds/aw-storage-mongodb';

/**
 * MongoDB Model(s) - Types representing data from MongoDB
 */

/**
 * @typedef {Object} FinalizeMongoModel
 */
export type FinalizeMongoModel = {
  _id?: MongoDB.ObjectId;
  proposal_id?: string;
  dac_id?: string;
  [key: string]: unknown;
};

/**
 * Raw Model(s) - Types representing data from blockchain
 */

/**
 * @typedef {Object} FinalizeRawModel
 */
export type FinalizeRawModel = {
  proposal_id?: string;
  dac_id?: string;
  [key: string]: unknown;
};

