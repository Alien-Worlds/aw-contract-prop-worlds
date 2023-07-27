/**
 * Auto generated. DO NOT edit manually.
 * Last updated on: Thu, 27 Jul 2023 15:06:33 GMT
 */

import { Entity, UnknownObject } from "@alien-worlds/aw-core";
import { ExtendedAsset } from '@alien-worlds/aw-antelope';

/**
 * Represents a `Createprop` object.
 *
 * @class
 */
export class Createprop implements Entity {
  /**
   * Constructs a new instance of the `Createprop` class.
   *
   * @public
   * @constructor
   * @param string proposer
   * @param string title
   * @param string summary
   * @param string arbitrator
   * @param ExtendedAsset proposalPay
   * @param ExtendedAsset arbitratorPay
   * @param string contentHash
   * @param string id
   * @param number category
   * @param number jobDuration
   * @param string dacId
   * @param string [id]
   * @returns `Createprop` - An instance of the `Createprop` class.
   */
  public constructor(
    public proposer: string,
    public title: string,
    public summary: string,
    public arbitrator: string,
    public proposalPay: ExtendedAsset,
    public arbitratorPay: ExtendedAsset,
    public contentHash: string,
    public id: string,
    public category: number,
    public jobDuration: number,
    public dacId: string,
    
  ) {}

  public rest?: UnknownObject;

  /**
   * Converts the current instance of the `Createprop` class to a JSON object.
   * 
   * @public
   * @returns {UnknownObject} The JSON representation of the instance.
   */
  public toJSON(): UnknownObject {
    return {
      proposer: this.proposer,
      title: this.title,
      summary: this.summary,
      arbitrator: this.arbitrator,
      proposalPay: this.proposalPay,
      arbitratorPay: this.arbitratorPay,
      contentHash: this.contentHash,
      id: this.id,
      category: this.category,
      jobDuration: this.jobDuration,
      dacId: this.dacId,
    };
  }

  /**
   * Creates an instance of the `Createprop` class.
   *
   * @static
   * @public
   * @param string proposer
   * @param string title
   * @param string summary
   * @param string arbitrator
   * @param ExtendedAsset proposalPay
   * @param ExtendedAsset arbitratorPay
   * @param string contentHash
   * @param string id
   * @param number category
   * @param number jobDuration
   * @param string dacId
   * @returns `Createprop` An instance of the `Createprop` class.
   */
  public static create(
    proposer: string,
    title: string,
    summary: string,
    arbitrator: string,
    proposalPay: ExtendedAsset,
    arbitratorPay: ExtendedAsset,
    contentHash: string,
    id: string,
    category: number,
    jobDuration: number,
    dacId: string,
    
    rest?: UnknownObject
  ): Createprop {
    const entity = new Createprop(
      proposer,
      title,
      summary,
      arbitrator,
      proposalPay,
      arbitratorPay,
      contentHash,
      id,
      category,
      jobDuration,
      dacId,
      
    );
    entity.rest = rest;

    return entity;
  }

  public static getDefault(): Createprop {
    return new Createprop(
      '',
      '',
      '',
      '',
      ExtendedAsset.getDefault(),
      ExtendedAsset.getDefault(),
      '',
      '',
      0,
      0,
      '',
    );
  }
}

