/**
 * Auto generated. DO NOT edit manually.
 * Last updated on: Mon, 10 Jul 2023 08:57:16 GMT
 */

import { MongoDB } from '@alien-worlds/storage-mongodb';

/**
 * MongoDB Model(s) - Types representing data from MongoDB
 */

/**
 * @typedef {Object} UndelegatecaMongoModel
 */
export type UndelegatecaMongoModel = {
  _id?: MongoDB.ObjectId;
  custodian?: string;
  category?: MongoDB.Long;
  dac_id?: string;
  [key: string]: unknown;
};

/**
 * Raw Model(s) - Types representing data from blockchain
 */

/**
 * @typedef {Object} UndelegatecaRawModel
 */
export type UndelegatecaRawModel = {
  custodian?: string;
  category?: bigint;
  dac_id?: string;
  [key: string]: unknown;
};

