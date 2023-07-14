/**
 * Auto generated. DO NOT edit manually.
 * Last updated on: Fri, 14 Jul 2023 17:08:56 GMT
 */

import { Entity, UnknownObject } from "@alien-worlds/api-core";

/**
 * Represents a `Startwork` object.
 *
 * @class
 */
export class Startwork implements Entity {
  /**
   * Constructs a new instance of the `Startwork` class.
   *
   * @public
   * @constructor
   * @param string proposalId
   * @param string dacId
   * @param string [id]
   * @returns `Startwork` - An instance of the `Startwork` class.
   */
  public constructor(
    public proposalId: string,
    public dacId: string,
    public id?: string,
  ) {}

  public rest?: UnknownObject;

  /**
   * Converts the current instance of the `Startwork` class to a JSON object.
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
   * Creates an instance of the `Startwork` class.
   *
   * @static
   * @public
   * @param string proposalId
   * @param string dacId
   * @returns `Startwork` An instance of the `Startwork` class.
   */
  public static create(
    proposalId: string,
    dacId: string,
    id?: string,
    rest?: UnknownObject
  ): Startwork {
    const entity = new Startwork(
      proposalId,
      dacId,
      id,
    );
    entity.rest = rest;

    return entity;
  }

  public static getDefault(): Startwork {
    return new Startwork(
      '',
      '',
    );
  }
}

