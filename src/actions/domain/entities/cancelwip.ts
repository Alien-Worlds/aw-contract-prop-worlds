/**
 * Auto generated. DO NOT edit manually.
 * Last updated on: Fri, 14 Jul 2023 17:08:56 GMT
 */

import { Entity, UnknownObject } from "@alien-worlds/api-core";

/**
 * Represents a `Cancelwip` object.
 *
 * @class
 */
export class Cancelwip implements Entity {
  /**
   * Constructs a new instance of the `Cancelwip` class.
   *
   * @public
   * @constructor
   * @param string proposalId
   * @param string dacId
   * @param string [id]
   * @returns `Cancelwip` - An instance of the `Cancelwip` class.
   */
  public constructor(
    public proposalId: string,
    public dacId: string,
    public id?: string,
  ) {}

  public rest?: UnknownObject;

  /**
   * Converts the current instance of the `Cancelwip` class to a JSON object.
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
   * Creates an instance of the `Cancelwip` class.
   *
   * @static
   * @public
   * @param string proposalId
   * @param string dacId
   * @returns `Cancelwip` An instance of the `Cancelwip` class.
   */
  public static create(
    proposalId: string,
    dacId: string,
    id?: string,
    rest?: UnknownObject
  ): Cancelwip {
    const entity = new Cancelwip(
      proposalId,
      dacId,
      id,
    );
    entity.rest = rest;

    return entity;
  }

  public static getDefault(): Cancelwip {
    return new Cancelwip(
      '',
      '',
    );
  }
}

