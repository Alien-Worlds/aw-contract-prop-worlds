/**
 * Auto generated. DO NOT edit manually.
 * Last updated on: Mon, 10 Jul 2023 08:57:16 GMT
 */

import { MongoDB } from '@alien-worlds/storage-mongodb';

/**
 * MongoDB Model(s) - Types representing data from MongoDB
 */

/**
 * @typedef {Object} CancelpropMongoModel
 */
export type CancelpropMongoModel = {
  _id?: MongoDB.ObjectId;
  proposal_id?: string;
  dac_id?: string;
  [key: string]: unknown;
};

/**
 * Raw Model(s) - Types representing data from blockchain
 */

/**
 * @typedef {Object} CancelpropRawModel
 */
export type CancelpropRawModel = {
  proposal_id?: string;
  dac_id?: string;
  [key: string]: unknown;
};
