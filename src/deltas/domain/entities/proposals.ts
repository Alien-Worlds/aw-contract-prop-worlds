/**
 * Auto generated. DO NOT edit manually.
 * Last updated on: Thu, 27 Jul 2023 15:06:33 GMT
 */

import { Entity, UnknownObject } from "@alien-worlds/aw-core";
import { ExtendedAsset } from '@alien-worlds/aw-antelope';

/**
 * Represents a `Proposals` object.
 *
 * @class
 */
export class Proposals implements Entity {
  /**
   * Constructs a new instance of the `Proposals` class.
   *
   * @public
   * @constructor
   * @param string proposalId
   * @param string proposer
   * @param string arbitrator
   * @param string contentHash
   * @param ExtendedAsset proposalPay
   * @param ExtendedAsset arbitratorPay
   * @param string state
   * @param Date expiry
   * @param number jobDuration
   * @param number category
   * @param string [id]
   * @returns `Proposals` - An instance of the `Proposals` class.
   */
  public constructor(
    public proposalId: string,
    public proposer: string,
    public arbitrator: string,
    public contentHash: string,
    public proposalPay: ExtendedAsset,
    public arbitratorPay: ExtendedAsset,
    public state: string,
    public expiry: Date,
    public jobDuration: number,
    public category: number,
    public id?: string,
  ) {}

  public rest?: UnknownObject;

  /**
   * Converts the current instance of the `Proposals` class to a JSON object.
   * 
   * @public
   * @returns {UnknownObject} The JSON representation of the instance.
   */
  public toJSON(): UnknownObject {
    return {
      proposalId: this.proposalId,
      proposer: this.proposer,
      arbitrator: this.arbitrator,
      contentHash: this.contentHash,
      proposalPay: this.proposalPay,
      arbitratorPay: this.arbitratorPay,
      state: this.state,
      expiry: this.expiry,
      jobDuration: this.jobDuration,
      category: this.category,
    };
  }

  /**
   * Creates an instance of the `Proposals` class.
   *
   * @static
   * @public
   * @param string proposalId
   * @param string proposer
   * @param string arbitrator
   * @param string contentHash
   * @param ExtendedAsset proposalPay
   * @param ExtendedAsset arbitratorPay
   * @param string state
   * @param Date expiry
   * @param number jobDuration
   * @param number category
   * @returns `Proposals` An instance of the `Proposals` class.
   */
  public static create(
    proposalId: string,
    proposer: string,
    arbitrator: string,
    contentHash: string,
    proposalPay: ExtendedAsset,
    arbitratorPay: ExtendedAsset,
    state: string,
    expiry: Date,
    jobDuration: number,
    category: number,
    id?: string,
    rest?: UnknownObject
  ): Proposals {
    const entity = new Proposals(
      proposalId,
      proposer,
      arbitrator,
      contentHash,
      proposalPay,
      arbitratorPay,
      state,
      expiry,
      jobDuration,
      category,
      id,
    );
    entity.rest = rest;

    return entity;
  }

  public static getDefault(): Proposals {
    return new Proposals(
      '',
      '',
      '',
      '',
      ExtendedAsset.getDefault(),
      ExtendedAsset.getDefault(),
      '',
      new Date(0),
      0,
      0,
    );
  }
}

