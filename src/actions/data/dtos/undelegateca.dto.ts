/**
 * Auto generated. DO NOT edit manually.
 * Last updated on: Fri, 14 Jul 2023 17:08:56 GMT
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
  category?: number;
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
  category?: number;
  dac_id?: string;
  [key: string]: unknown;
};

