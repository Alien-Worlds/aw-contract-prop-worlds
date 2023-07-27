/**
 * Auto generated. DO NOT edit manually.
 * Last updated on: Thu, 27 Jul 2023 15:06:33 GMT
 */

import { MapperImpl } from '@alien-worlds/aw-core';
import { MongoDB, MongoMapper } from '@alien-worlds/aw-storage-mongodb';
import { Comment  } from "../../domain/entities";
import { CommentMongoModel, CommentRawModel  } from "../dtos/comment.dto";

// Mongo Mappers
export class CommentMongoMapper
  extends MongoMapper<Comment, CommentMongoModel>
{
  constructor() {
    super();

    this.mappingFromEntity.set('commenter', { 
      key: 'commenter', 
      mapper: (value: string) => value,
    });

    this.mappingFromEntity.set('proposalId', { 
      key: 'proposal_id', 
      mapper: (value: string) => value,
    });

    this.mappingFromEntity.set('comment', { 
      key: 'comment', 
      mapper: (value: string) => value,
    });

    this.mappingFromEntity.set('commentCategory', { 
      key: 'comment_category', 
      mapper: (value: string) => value,
    });

    this.mappingFromEntity.set('dacId', { 
      key: 'dac_id', 
      mapper: (value: string) => value,
    });

  }

  public toEntity(mongoModel: CommentMongoModel): Comment {
    const { 
      commenter,
      proposal_id,
      comment,
      comment_category,
      dac_id,
      _id,
      ...rest
    } = mongoModel;

    return Comment.create(
      commenter || '',
      proposal_id || '',
      comment || '',
      comment_category || '',
      dac_id || '',
      _id instanceof MongoDB.ObjectId ? _id.toString() : undefined,
      rest
    );
  }
}


// Raw mappers
export class CommentRawMapper
  extends MapperImpl<Comment, CommentRawModel>
{
  public fromEntity(entity: Comment): CommentRawModel {
    throw new Error('Method not implemented');
  }

  public toEntity(rawModel: CommentRawModel): Comment {
    const { 
      commenter,
      proposal_id,
      comment,
      comment_category,
      dac_id,
      ...rest
    } = rawModel;

    return Comment.create(
      commenter || '',
      proposal_id || '',
      comment || '',
      comment_category || '',
      dac_id || '',
      undefined,
      rest
    );
  }
}

