/**
 * Auto generated. DO NOT edit manually.
 * Last updated on: Mon, 10 Jul 2023 08:57:16 GMT
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
  vote_id?: MongoDB.Long;
  voter?: string;
  proposal_id?: string;
  category_id?: MongoDB.Long;
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
  vote_id?: bigint;
  voter?: string;
  proposal_id?: string;
  category_id?: bigint;
  vote?: string;
  delegatee?: string;
  comment_hash?: string;
  [key: string]: unknown;
};

