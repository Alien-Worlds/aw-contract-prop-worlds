/**
 * Auto generated. DO NOT edit manually.
 * Last updated on: Mon, 10 Jul 2023 08:57:16 GMT
 */

import { MongoDB } from '@alien-worlds/storage-mongodb';

/**
 * MongoDB Model(s) - Types representing data from MongoDB
 */

/**
 * @typedef {Object} CommentMongoModel
 */
export type CommentMongoModel = {
  _id?: MongoDB.ObjectId;
  commenter?: string;
  proposal_id?: string;
  comment?: string;
  comment_category?: string;
  dac_id?: string;
  [key: string]: unknown;
};

/**
 * Raw Model(s) - Types representing data from blockchain
 */

/**
 * @typedef {Object} CommentRawModel
 */
export type CommentRawModel = {
  commenter?: string;
  proposal_id?: string;
  comment?: string;
  comment_category?: string;
  dac_id?: string;
  [key: string]: unknown;
};

