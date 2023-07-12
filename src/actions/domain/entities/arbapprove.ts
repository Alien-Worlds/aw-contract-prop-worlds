/**
 * Auto generated. DO NOT edit manually.
 * Last updated on: Wed, 12 Jul 2023 11:36:10 GMT
 */

import { Entity, UnknownObject } from "@alien-worlds/api-core";

/**
 * Represents a `Arbapprove` object.
 *
 * @class
 */
export class Arbapprove implements Entity {
  /**
   * Constructs a new instance of the `Arbapprove` class.
   *
   * @public
   * @constructor
   * @param string arbitrator
   * @param string proposalId
   * @param string dacId
   * @param string [id]
   * @returns `Arbapprove` - An instance of the `Arbapprove` class.
   */
  public constructor(
    public arbitrator: string,
    public proposalId: string,
    public dacId: string,
    public id?: string,
  ) {}

  public rest?: UnknownObject;

  /**
   * Converts the current instance of the `Arbapprove` class to a JSON object.
   * 
   * @public
   * @returns {UnknownObject} The JSON representation of the instance.
   */
  public toJSON(): UnknownObject {
    return {
      arbitrator: this.arbitrator,
      proposalId: this.proposalId,
      dacId: this.dacId,
    };
  }

  /**
   * Creates an instance of the `Arbapprove` class.
   *
   * @static
   * @public
   * @param string arbitrator
   * @param string proposalId
   * @param string dacId
   * @returns `Arbapprove` An instance of the `Arbapprove` class.
   */
  public static create(
    arbitrator: string,
    proposalId: string,
    dacId: string,
    id?: string,
    rest?: UnknownObject
  ): Arbapprove {
    const entity = new Arbapprove(
      arbitrator,
      proposalId,
      dacId,
      id,
    );
    entity.rest = rest;

    return entity;
  }

  public static getDefault(): Arbapprove {
    return new Arbapprove(
      '',
      '',
      '',
    );
  }
}

