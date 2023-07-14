/**
 * Auto generated. DO NOT edit manually.
 * Last updated on: Fri, 14 Jul 2023 19:20:53 GMT
 */

import { MongoDB } from '@alien-worlds/storage-mongodb';

/**
 * MongoDB Model(s) - Types representing data from MongoDB
 */

/**
 * @typedef {Object} DelegatecatMongoModel
 */
export type DelegatecatMongoModel = {
  _id?: MongoDB.ObjectId;
  custodian?: string;
  category?: number;
  delegatee_custodian?: string;
  dac_id?: string;
  [key: string]: unknown;
};

/**
 * Raw Model(s) - Types representing data from blockchain
 */

/**
 * @typedef {Object} DelegatecatRawModel
 */
export type DelegatecatRawModel = {
  custodian?: string;
  category?: number;
  delegatee_custodian?: string;
  dac_id?: string;
  [key: string]: unknown;
};

