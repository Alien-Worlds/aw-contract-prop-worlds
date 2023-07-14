/**
 * Auto generated. DO NOT edit manually.
 * Last updated on: Fri, 14 Jul 2023 19:20:53 GMT
 */

import { Entity, UnknownObject } from "@alien-worlds/api-core";

/**
 * Represents a `Cancelprop` object.
 *
 * @class
 */
export class Cancelprop implements Entity {
  /**
   * Constructs a new instance of the `Cancelprop` class.
   *
   * @public
   * @constructor
   * @param string proposalId
   * @param string dacId
   * @param string [id]
   * @returns `Cancelprop` - An instance of the `Cancelprop` class.
   */
  public constructor(
    public proposalId: string,
    public dacId: string,
    public id?: string,
  ) {}

  public rest?: UnknownObject;

  /**
   * Converts the current instance of the `Cancelprop` class to a JSON object.
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
   * Creates an instance of the `Cancelprop` class.
   *
   * @static
   * @public
   * @param string proposalId
   * @param string dacId
   * @returns `Cancelprop` An instance of the `Cancelprop` class.
   */
  public static create(
    proposalId: string,
    dacId: string,
    id?: string,
    rest?: UnknownObject
  ): Cancelprop {
    const entity = new Cancelprop(
      proposalId,
      dacId,
      id,
    );
    entity.rest = rest;

    return entity;
  }

  public static getDefault(): Cancelprop {
    return new Cancelprop(
      '',
      '',
    );
  }
}

