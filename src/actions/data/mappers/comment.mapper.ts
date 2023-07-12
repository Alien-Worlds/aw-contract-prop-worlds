/**
 * Auto generated. DO NOT edit manually.
 * Last updated on: Wed, 12 Jul 2023 11:36:10 GMT
 */

import { MapperImpl } from '@alien-worlds/api-core';
import { MongoDB } from '@alien-worlds/storage-mongodb';
import { Comment  } from "../../domain/entities";
import { CommentMongoModel, CommentRawModel  } from "../dtos/comment.dto";

// Mongo Mappers
export class CommentMongoMapper
  extends MapperImpl<Comment, CommentMongoModel>
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

