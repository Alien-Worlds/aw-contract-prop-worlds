/**
 * Auto generated. DO NOT edit manually.
 * Last updated on: Wed, 12 Jul 2023 11:36:10 GMT
 */

import { Entity, UnknownObject } from "@alien-worlds/api-core";

/**
 * Represents a `Completework` object.
 *
 * @class
 */
export class Completework implements Entity {
  /**
   * Constructs a new instance of the `Completework` class.
   *
   * @public
   * @constructor
   * @param string proposalId
   * @param string dacId
   * @param string [id]
   * @returns `Completework` - An instance of the `Completework` class.
   */
  public constructor(
    public proposalId: string,
    public dacId: string,
    public id?: string,
  ) {}

  public rest?: UnknownObject;

  /**
   * Converts the current instance of the `Completework` class to a JSON object.
   * 
   * @public
   * @returns {UnknownObject} The JSON representation of the instance.
   */
  public toJSON(): UnknownObject {
    return {
      proposalId: this.proposalId,
      dacId: this.dacId,
    };
  }

  /**
   * Creates an instance of the `Completework` class.
   *
   * @static
   * @public
   * @param string proposalId
   * @param string dacId
   * @returns `Completework` An instance of the `Completework` class.
   */
  public static create(
    proposalId: string,
    dacId: string,
    id?: string,
    rest?: UnknownObject
  ): Completework {
    const entity = new Completework(
      proposalId,
      dacId,
      id,
    );
    entity.rest = rest;

    return entity;
  }

  public static getDefault(): Completework {
    return new Completework(
      '',
      '',
    );
  }
}

