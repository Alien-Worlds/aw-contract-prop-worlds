/**
 * Auto generated. DO NOT edit manually.
 * Last updated on: Fri, 14 Jul 2023 17:08:56 GMT
 */

import { MapperImpl } from '@alien-worlds/api-core';
import { MongoDB } from '@alien-worlds/storage-mongodb';
import { Propvotes  } from "../../domain/entities";
import { PropvotesMongoModel, PropvotesRawModel  } from "../dtos/propvotes.dto";

// Mongo Mappers
export class PropvotesMongoMapper
  extends MapperImpl<Propvotes, PropvotesMongoModel>
{
  constructor() {
    super();

    this.mappingFromEntity.set('voteId', { 
      key: 'vote_id', 
      mapper: (value: number) => value,
    });

    this.mappingFromEntity.set('voter', { 
      key: 'voter', 
      mapper: (value: string) => value,
    });

    this.mappingFromEntity.set('proposalId', { 
      key: 'proposal_id', 
      mapper: (value: string) => value,
    });

    this.mappingFromEntity.set('categoryId', { 
      key: 'category_id', 
      mapper: (value: number) => value,
    });

    this.mappingFromEntity.set('vote', { 
      key: 'vote', 
      mapper: (value: string) => value,
    });

    this.mappingFromEntity.set('delegatee', { 
      key: 'delegatee', 
      mapper: (value: string) => value,
    });

    this.mappingFromEntity.set('commentHash', { 
      key: 'comment_hash', 
      mapper: (value: string) => value,
    });

  }

  public toEntity(mongoModel: PropvotesMongoModel): Propvotes {
    const { 
      vote_id,
      voter,
      proposal_id,
      category_id,
      vote,
      delegatee,
      comment_hash,
      _id,
      ...rest
    } = mongoModel;

    return Propvotes.create(
      vote_id || 0,
      voter || '',
      proposal_id || '',
      category_id || 0,
      vote || '',
      delegatee || '',
      comment_hash || '',
      _id instanceof MongoDB.ObjectId ? _id.toString() : undefined,
      rest
    );
  }
}


// Raw mappers
export class PropvotesRawMapper
  extends MapperImpl<Propvotes, PropvotesRawModel>
{
  public fromEntity(entity: Propvotes): PropvotesRawModel {
    throw new Error('Method not implemented');
  }

  public toEntity(rawModel: PropvotesRawModel): Propvotes {
    const { 
      vote_id,
      voter,
      proposal_id,
      category_id,
      vote,
      delegatee,
      comment_hash,
      ...rest
    } = rawModel;

    return Propvotes.create(
      vote_id || 0,
      voter || '',
      proposal_id || '',
      category_id || 0,
      vote || '',
      delegatee || '',
      comment_hash || '',
      undefined,
      rest
    );
  }
}

