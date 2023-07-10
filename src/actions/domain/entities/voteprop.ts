/**
 * Auto generated. DO NOT edit manually.
 * Last updated on: Mon, 10 Jul 2023 08:57:16 GMT
 */

import { Entity, UnknownObject } from "@alien-worlds/api-core";

/**
 * Represents a `Voteprop` object.
 *
 * @class
 */
export class Voteprop implements Entity {
  /**
   * Constructs a new instance of the `Voteprop` class.
   *
   * @public
   * @constructor
   * @param string custodian
   * @param string proposalId
   * @param string vote
   * @param string dacId
   * @param string [id]
   * @returns `Voteprop` - An instance of the `Voteprop` class.
   */
  public constructor(
    public custodian: string,
    public proposalId: string,
    public vote: string,
    public dacId: string,
    public id?: string,
  ) {}

  public rest?: UnknownObject;

  /**
   * Converts the current instance of the `Voteprop` class to a JSON object.
   * 
   * @public
   * @returns {UnknownObject} The JSON representation of the instance.
   */
  public toJSON(): UnknownObject {
    return {
      custodian: this.custodian,
      proposalId: this.proposalId,
      vote: this.vote,
      dacId: this.dacId,
    };
  }

  /**
   * Creates an instance of the `Voteprop` class.
   *
   * @static
   * @public
   * @returns `Voteprop` An instance of the `Voteprop` class.
   */
  public static create(
    custodian: string,
    proposalId: string,
    vote: string,
    dacId: string,
    id?: string,
    rest?: UnknownObject
  ): Voteprop {
    const entity = new Voteprop(
      custodian,
      proposalId,
      vote,
      dacId,
      id
    );
    entity.rest = rest;

    return entity;
  }

  public static getDefault(): Voteprop {
    return new Voteprop(
      '',
      '',
      '',
      '',
    );
  }
}

