/**
 * Auto generated. DO NOT edit manually.
 * Last updated on: Fri, 14 Jul 2023 17:08:56 GMT
 */

import { MongoDB } from '@alien-worlds/storage-mongodb';
import { Pair } from '@alien-worlds/eosio-contract-types';

/**
 * MongoDB Model(s) - Types representing data from MongoDB
 */

/**
 * @typedef {Object} ConfigsMongoModel
 */
export type ConfigsMongoModel = {
  _id?: MongoDB.ObjectId;
  data?: Pair[];
  [key: string]: unknown;
};

/**
 * Raw Model(s) - Types representing data from blockchain
 */

/**
 * @typedef {Object} ConfigsRawModel
 */
export type ConfigsRawModel = {
  data?: Pair[];
  [key: string]: unknown;
};

