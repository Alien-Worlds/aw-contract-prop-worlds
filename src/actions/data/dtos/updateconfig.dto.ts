/**
 * Auto generated. DO NOT edit manually.
 * Last updated on: Thu, 27 Jul 2023 15:06:33 GMT
 */

import { MongoDB } from '@alien-worlds/aw-storage-mongodb';

/**
 * MongoDB Model(s) - Types representing data from MongoDB
 */

/**
 * @typedef {Object} UpdateconfigMongoModel
 */
export type UpdateconfigMongoModel = {
  _id?: MongoDB.ObjectId;
  new_config?: ConfigMongoModel;
  dac_id?: string;
  [key: string]: unknown;
};

/**
 * @typedef {Object} ConfigMongoModel
 */
export type ConfigMongoModel = {
  _id?: MongoDB.ObjectId;
  proposal_threshold?: number;
  finalize_threshold?: number;
  approval_duration?: number;
  [key: string]: unknown;
};

/**
 * Raw Model(s) - Types representing data from blockchain
 */

/**
 * @typedef {Object} UpdateconfigRawModel
 */
export type UpdateconfigRawModel = {
  new_config?: ConfigRawModel;
  dac_id?: string;
  [key: string]: unknown;
};

/**
 * @typedef {Object} ConfigRawModel
 */
export type ConfigRawModel = {
  proposal_threshold?: number;
  finalize_threshold?: number;
  approval_duration?: number;
  [key: string]: unknown;
};

