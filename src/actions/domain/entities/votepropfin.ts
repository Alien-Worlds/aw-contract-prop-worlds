/**
 * Auto generated. DO NOT edit manually.
 * Last updated on: Fri, 14 Jul 2023 17:54:33 GMT
 */

import { Entity, UnknownObject } from "@alien-worlds/api-core";

/**
 * Represents a `Votepropfin` object.
 *
 * @class
 */
export class Votepropfin implements Entity {
  /**
   * Constructs a new instance of the `Votepropfin` class.
   *
   * @public
   * @constructor
   * @param string custodian
   * @param string proposalId
   * @param string vote
   * @param string dacId
   * @param string [id]
   * @returns `Votepropfin` - An instance of the `Votepropfin` class.
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
   * Converts the current instance of the `Votepropfin` class to a JSON object.
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
   * Creates an instance of the `Votepropfin` class.
   *
   * @static
   * @public
   * @param string custodian
   * @param string proposalId
   * @param string vote
   * @param string dacId
   * @returns `Votepropfin` An instance of the `Votepropfin` class.
   */
  public static create(
    custodian: string,
    proposalId: string,
    vote: string,
    dacId: string,
    id?: string,
    rest?: UnknownObject
  ): Votepropfin {
    const entity = new Votepropfin(
      custodian,
      proposalId,
      vote,
      dacId,
      id,
    );
    entity.rest = rest;

    return entity;
  }

  public static getDefault(): Votepropfin {
    return new Votepropfin(
      '',
      '',
      '',
      '',
    );
  }
}

