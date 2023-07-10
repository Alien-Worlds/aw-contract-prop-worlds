/**
 * Auto generated. DO NOT edit manually.
 * Last updated on: Mon, 10 Jul 2023 08:57:16 GMT
 */

import { MongoDB } from '@alien-worlds/storage-mongodb';

/**
 * MongoDB Model(s) - Types representing data from MongoDB
 */

/**
 * @typedef {Object} ConfigsMongoModel
 */
export type ConfigsMongoModel = {
  _id?: MongoDB.ObjectId;
  data?: PairStringStateValueVariantMongoModel[];
  [key: string]: unknown;
};

/**
 * @typedef {Object} PairStringStateValueVariantMongoModel
 */
export type PairStringStateValueVariantMongoModel = {
  _id?: MongoDB.ObjectId;
  key?: string;
  value?: Array<unknown>;
  [key: string]: unknown;
};

/**
 * Raw Model(s) - Types representing data from blockchain
 */

/**
 * @typedef {Object} ConfigsRawModel
 */
export type ConfigsRawModel = {
  data?: PairStringStateValueVariantRawModel[];
  [key: string]: unknown;
};

/**
 * @typedef {Object} PairStringStateValueVariantRawModel
 */
export type PairStringStateValueVariantRawModel = {
  key?: string;
  value?: Array<unknown>;
  [key: string]: unknown;
};

