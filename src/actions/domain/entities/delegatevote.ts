/**
 * Auto generated. DO NOT edit manually.
 * Last updated on: Mon, 10 Jul 2023 08:57:16 GMT
 */

import { Entity, UnknownObject } from "@alien-worlds/api-core";

/**
 * Represents a `Delegatevote` object.
 *
 * @class
 */
export class Delegatevote implements Entity {
  /**
   * Constructs a new instance of the `Delegatevote` class.
   *
   * @public
   * @constructor
   * @param string custodian
   * @param string proposalId
   * @param string delegateeCustodian
   * @param string dacId
   * @param string [id]
   * @returns `Delegatevote` - An instance of the `Delegatevote` class.
   */
  public constructor(
    public custodian: string,
    public proposalId: string,
    public delegateeCustodian: string,
    public dacId: string,
    public id?: string,
  ) {}

  public rest?: UnknownObject;

  /**
   * Converts the current instance of the `Delegatevote` class to a JSON object.
   * 
   * @public
   * @returns {UnknownObject} The JSON representation of the instance.
   */
  public toJSON(): UnknownObject {
    return {
      custodian: this.custodian,
      proposalId: this.proposalId,
      delegateeCustodian: this.delegateeCustodian,
      dacId: this.dacId,
    };
  }

  /**
   * Creates an instance of the `Delegatevote` class.
   *
   * @static
   * @public
   * @returns `Delegatevote` An instance of the `Delegatevote` class.
   */
  public static create(
    custodian: string,
    proposalId: string,
    delegateeCustodian: string,
    dacId: string,
    id?: string,
    rest?: UnknownObject
  ): Delegatevote {
    const entity = new Delegatevote(
      custodian,
      proposalId,
      delegateeCustodian,
      dacId,
      id
    );
    entity.rest = rest;

    return entity;
  }

  public static getDefault(): Delegatevote {
    return new Delegatevote(
      '',
      '',
      '',
      '',
    );
  }
}

