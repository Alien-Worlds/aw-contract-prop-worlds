/**
 * Auto generated. DO NOT edit manually.
 * Last updated on: Fri, 14 Jul 2023 19:20:53 GMT
 */

import { MapperImpl } from '@alien-worlds/api-core';
import { MongoDB, MongoMapper } from '@alien-worlds/storage-mongodb';
import { ExtendedAsset, ExtendedAssetMongoMapper, ExtendedAssetRawMapper } from '@alien-worlds/eosio-contract-types';
import { Createprop  } from "../../domain/entities";
import { CreatepropMongoModel, CreatepropRawModel  } from "../dtos/createprop.dto";

// Mongo Mappers
export class CreatepropMongoMapper
  extends MongoMapper<Createprop, CreatepropMongoModel>
{
  constructor() {
    super();

    this.mappingFromEntity.set('proposer', { 
      key: 'proposer', 
      mapper: (value: string) => value,
    });

    this.mappingFromEntity.set('title', { 
      key: 'title', 
      mapper: (value: string) => value,
    });

    this.mappingFromEntity.set('summary', { 
      key: 'summary', 
      mapper: (value: string) => value,
    });

    this.mappingFromEntity.set('arbitrator', { 
      key: 'arbitrator', 
      mapper: (value: string) => value,
    });

    this.mappingFromEntity.set('proposalPay', { 
      key: 'proposal_pay', 
      mapper: (value: ExtendedAsset) => new ExtendedAssetMongoMapper().fromEntity(value),
    });

    this.mappingFromEntity.set('arbitratorPay', { 
      key: 'arbitrator_pay', 
      mapper: (value: ExtendedAsset) => new ExtendedAssetMongoMapper().fromEntity(value),
    });

    this.mappingFromEntity.set('contentHash', { 
      key: 'content_hash', 
      mapper: (value: string) => value,
    });

    this.mappingFromEntity.set('id', { 
      key: 'id', 
      mapper: (value: string) => value,
    });

    this.mappingFromEntity.set('category', { 
      key: 'category', 
      mapper: (value: number) => value,
    });

    this.mappingFromEntity.set('jobDuration', { 
      key: 'job_duration', 
      mapper: (value: number) => value,
    });

    this.mappingFromEntity.set('dacId', { 
      key: 'dac_id', 
      mapper: (value: string) => value,
    });

  }

  public toEntity(mongoModel: CreatepropMongoModel): Createprop {
    const { 
      proposer,
      title,
      summary,
      arbitrator,
      proposal_pay,
      arbitrator_pay,
      content_hash,
      id,
      category,
      job_duration,
      dac_id,
      
      ...rest
    } = mongoModel;

    return Createprop.create(
      proposer || '',
      title || '',
      summary || '',
      arbitrator || '',
      proposal_pay ? new ExtendedAssetMongoMapper().toEntity(proposal_pay) : ExtendedAsset.getDefault(),
      arbitrator_pay ? new ExtendedAssetMongoMapper().toEntity(arbitrator_pay) : ExtendedAsset.getDefault(),
      content_hash || '',
      id || '',
      category || 0,
      job_duration || 0,
      dac_id || '',
      
      rest
    );
  }
}


// Raw mappers
export class CreatepropRawMapper
  extends MapperImpl<Createprop, CreatepropRawModel>
{
  public fromEntity(entity: Createprop): CreatepropRawModel {
    throw new Error('Method not implemented');
  }

  public toEntity(rawModel: CreatepropRawModel): Createprop {
    const { 
      proposer,
      title,
      summary,
      arbitrator,
      proposal_pay,
      arbitrator_pay,
      content_hash,
      id,
      category,
      job_duration,
      dac_id,
      ...rest
    } = rawModel;

    return Createprop.create(
      proposer || '',
      title || '',
      summary || '',
      arbitrator || '',
      proposal_pay ? new ExtendedAssetRawMapper().toEntity(proposal_pay) : ExtendedAsset.getDefault(),
      arbitrator_pay ? new ExtendedAssetRawMapper().toEntity(arbitrator_pay) : ExtendedAsset.getDefault(),
      content_hash || '',
      id || '',
      category || 0,
      job_duration || 0,
      dac_id || '',
      
      rest
    );
  }
}

