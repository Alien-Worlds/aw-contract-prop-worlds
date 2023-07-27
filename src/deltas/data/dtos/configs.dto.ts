/**
 * Auto generated. DO NOT edit manually.
 * Last updated on: Thu, 27 Jul 2023 15:06:33 GMT
 */

import { MongoDB } from '@alien-worlds/aw-storage-mongodb';
import { Pair } from '@alien-worlds/aw-antelope';

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

