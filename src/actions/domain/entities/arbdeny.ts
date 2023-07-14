/**
 * Auto generated. DO NOT edit manually.
 * Last updated on: Fri, 14 Jul 2023 17:54:33 GMT
 */

import { Entity, UnknownObject } from "@alien-worlds/api-core";

/**
 * Represents a `Arbdeny` object.
 *
 * @class
 */
export class Arbdeny implements Entity {
  /**
   * Constructs a new instance of the `Arbdeny` class.
   *
   * @public
   * @constructor
   * @param string arbitrator
   * @param string proposalId
   * @param string dacId
   * @param string [id]
   * @returns `Arbdeny` - An instance of the `Arbdeny` class.
   */
  public constructor(
    public arbitrator: string,
    public proposalId: string,
    public dacId: string,
    public id?: string,
  ) {}

  public rest?: UnknownObject;

  /**
   * Converts the current instance of the `Arbdeny` class to a JSON object.
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
   * Creates an instance of the `Arbdeny` class.
   *
   * @static
   * @public
   * @param string arbitrator
   * @param string proposalId
   * @param string dacId
   * @returns `Arbdeny` An instance of the `Arbdeny` class.
   */
  public static create(
    arbitrator: string,
    proposalId: string,
    dacId: string,
    id?: string,
    rest?: UnknownObject
  ): Arbdeny {
    const entity = new Arbdeny(
      arbitrator,
      proposalId,
      dacId,
      id,
    );
    entity.rest = rest;

    return entity;
  }

  public static getDefault(): Arbdeny {
    return new Arbdeny(
      '',
      '',
      '',
    );
  }
}

