/**
 * Auto generated. DO NOT edit manually.
 * Last updated on: Thu, 27 Jul 2023 15:06:33 GMT
 */

import { Container, RepositoryImpl } from '@alien-worlds/aw-core';
import { 
  MongoConfig,
  MongoQueryBuilders, 
  MongoSource,
} from '@alien-worlds/aw-storage-mongodb';

import { PropWorldsActionMongoMapper } from './actions/data/mappers';
import { PropWorldsActionMongoSource } from './actions/data/data-sources';
import { PropWorldsActionRepository } from './actions/domain/repositories';
import { PropWorldsContractService } from "./services/prop-worlds-contract.service";
import { PropWorldsContractServiceImpl } from "./services/prop-worlds-contract.service-impl";
import { PropWorldsDeltaMongoMapper } from './deltas/data/mappers';
import { PropWorldsDeltaMongoSource } from './deltas/data/data-sources';
import { PropWorldsDeltaRepository } from './deltas/domain/repositories';
import { AntelopeRpcSourceImpl } from '@alien-worlds/aw-antelope';

export const setupPropWorldsActionRepository = async (
  mongo: MongoSource | MongoConfig,
  container?: Container
): Promise<PropWorldsActionRepository> => {
  let mongoSource: MongoSource;
  if (mongo instanceof MongoSource) {
    mongoSource = mongo;
  } else {
    mongoSource = await MongoSource.create(mongo);
  }

  const mapper = new PropWorldsActionMongoMapper();
  
  const repository = new RepositoryImpl(
    new PropWorldsActionMongoSource(mongoSource),
    mapper,
    new MongoQueryBuilders(mapper)
  );

  if (container) {
    container
      .bind<PropWorldsActionRepository>(PropWorldsActionRepository.Token)
      .toConstantValue(repository);
  }

  return repository;
};

export const setupPropWorldsDeltaRepository = async (
  mongo: MongoSource | MongoConfig,
  container?: Container
): Promise<PropWorldsDeltaRepository> => {
  let mongoSource: MongoSource;
  if (mongo instanceof MongoSource) {
    mongoSource = mongo;
  } else {
    mongoSource = await MongoSource.create(mongo);
  }

  const mapper = new PropWorldsDeltaMongoMapper();
  
  const repository = new RepositoryImpl(
    new PropWorldsDeltaMongoSource(mongoSource),
    mapper,
    new MongoQueryBuilders(mapper)
  );

  if (container) {
    container
      .bind<PropWorldsDeltaRepository>(PropWorldsDeltaRepository.Token)
      .toConstantValue(repository);
  }

  return repository;
};

export const setupPropWorldsContractService = (
  antelopeRpcSourceImpl: AntelopeRpcSourceImpl,
  serviceUrl: string,
  container?: Container
): PropWorldsContractService => {
  const service = new PropWorldsContractServiceImpl(
    antelopeRpcSourceImpl,
    serviceUrl
  );

  if (container) {
    container
      .bind<PropWorldsContractService>(PropWorldsContractService.Token)
      .toConstantValue(service);
  }

  return service;
};
