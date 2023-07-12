/**
 * Auto generated. DO NOT edit manually.
 * Last updated on: Wed, 12 Jul 2023 11:36:10 GMT
 */

import { MongoDB } from '@alien-worlds/storage-mongodb';

/**
 * MongoDB Model(s) - Types representing data from MongoDB
 */

/**
 * @typedef {Object} PropvotesMongoModel
 */
export type PropvotesMongoModel = {
  _id?: MongoDB.ObjectId;
  vote_id?: number;
  voter?: string;
  proposal_id?: string;
  category_id?: number;
  vote?: string;
  delegatee?: string;
  comment_hash?: string;
  [key: string]: unknown;
};

/**
 * Raw Model(s) - Types representing data from blockchain
 */

/**
 * @typedef {Object} PropvotesRawModel
 */
export type PropvotesRawModel = {
  vote_id?: number;
  voter?: string;
  proposal_id?: string;
  category_id?: number;
  vote?: string;
  delegatee?: string;
  comment_hash?: string;
  [key: string]: unknown;
};

