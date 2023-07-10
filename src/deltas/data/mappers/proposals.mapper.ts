/**
 * Auto generated. DO NOT edit manually.
 * Last updated on: Mon, 10 Jul 2023 08:57:16 GMT
 */

import {
  MapperImpl,
  parseToBigInt,
} from '@alien-worlds/api-core';
import { MongoDB } from '@alien-worlds/storage-mongodb';
import { ExtendedAsset, ExtendedAssetMongoMapper, ExtendedAssetRawMapper } from '@alien-worlds/eosio-contract-types';
import { Proposals  } from "../../domain/entities";
import { ProposalsMongoModel, ProposalsRawModel  } from "../dtos/proposals.dto";

// Mongo Mappers
export class ProposalsMongoMapper
  extends MapperImpl<Proposals, ProposalsMongoModel>
{
  constructor() {
    super();

    this.mappingFromEntity.set('proposalId', { 
      key: 'proposal_id', 
      mapper: (value: string) => 
        value,
    });

    this.mappingFromEntity.set('proposer', { 
      key: 'proposer', 
      mapper: (value: string) => 
        value,
    });

    this.mappingFromEntity.set('arbitrator', { 
      key: 'arbitrator', 
      mapper: (value: string) => 
        value,
    });

    this.mappingFromEntity.set('contentHash', { 
      key: 'content_hash', 
      mapper: (value: string) => 
        value,
    });

    this.mappingFromEntity.set('proposalPay', { 
      key: 'proposal_pay', 
      mapper: (value: ExtendedAsset) => 
           new ExtendedAssetMongoMapper().fromEntity(value)
    });

    this.mappingFromEntity.set('arbitratorPay', { 
      key: 'arbitrator_pay', 
      mapper: (value: ExtendedAsset) => 
           new ExtendedAssetMongoMapper().fromEntity(value)
    });

    this.mappingFromEntity.set('state', { 
      key: 'state', 
      mapper: (value: string) => 
        value,
    });

    this.mappingFromEntity.set('expiry', { 
      key: 'expiry', 
      mapper: (value: Date) => 
        value,
    });

    this.mappingFromEntity.set('jobDuration', { 
      key: 'job_duration', 
      mapper: (value: number) => 
        value,
    });

    this.mappingFromEntity.set('category', { 
      key: 'category', 
      mapper: (value: number) => 
        value,
    });

  }

  public toEntity(mongoModel: ProposalsMongoModel): Proposals {
    const { 
      proposal_id,
      proposer,
      arbitrator,
      content_hash,
      proposal_pay,
      arbitrator_pay,
      state,
      expiry,
      job_duration,
      category,
      _id, 
      ...rest
    } = mongoModel;

    return Proposals.create(
        proposal_id ?? '',
        proposer ?? '',
        arbitrator ?? '',
        content_hash ?? '',
        proposal_pay 
          ? new ExtendedAssetMongoMapper().toEntity(proposal_pay)
          : ExtendedAsset.getDefault(),
        arbitrator_pay 
          ? new ExtendedAssetMongoMapper().toEntity(arbitrator_pay)
          : ExtendedAsset.getDefault(),
        state ?? '',
        expiry ?? new Date(0),
        job_duration ?? 0,
        category ?? 0,
      _id instanceof MongoDB.ObjectId ? _id.toString() : undefined,
      rest
    );
  }
}


// Raw mappers
export class ProposalsRawMapper
  extends MapperImpl<Proposals, ProposalsRawModel>
{
  public fromEntity(entity: Proposals): ProposalsRawModel {
    throw new Error('Method not implemented');
  }

  public toEntity(rawModel: ProposalsRawModel): Proposals {
    const { 
      proposal_id,
      proposer,
      arbitrator,
      content_hash,
      proposal_pay,
      arbitrator_pay,
      state,
      expiry,
      job_duration,
      category,
      ...rest
    } = rawModel;

    return Proposals.create(
        proposal_id ?? '',
        proposer ?? '',
        arbitrator ?? '',
        content_hash ?? '',
        proposal_pay 
          ? new ExtendedAssetRawMapper().toEntity(proposal_pay)
          : ExtendedAsset.getDefault(),
        arbitrator_pay 
          ? new ExtendedAssetRawMapper().toEntity(arbitrator_pay)
          : ExtendedAsset.getDefault(),
        state ?? '',
        expiry ?? new Date(0),
        job_duration ?? 0,
        category ?? 0,
      undefined,
      rest
    );
  }
}

