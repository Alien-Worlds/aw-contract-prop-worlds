/**
 * Auto generated. DO NOT edit manually.
 * Last updated on: Thu, 27 Jul 2023 15:06:33 GMT
 */

import { Entity, UnknownObject } from "@alien-worlds/aw-core";

/**
 * Represents a `Delegatecat` object.
 *
 * @class
 */
export class Delegatecat implements Entity {
  /**
   * Constructs a new instance of the `Delegatecat` class.
   *
   * @public
   * @constructor
   * @param string custodian
   * @param number category
   * @param string delegateeCustodian
   * @param string dacId
   * @param string [id]
   * @returns `Delegatecat` - An instance of the `Delegatecat` class.
   */
  public constructor(
    public custodian: string,
    public category: number,
    public delegateeCustodian: string,
    public dacId: string,
    public id?: string,
  ) {}

  public rest?: UnknownObject;

  /**
   * Converts the current instance of the `Delegatecat` class to a JSON object.
   * 
   * @public
   * @returns {UnknownObject} The JSON representation of the instance.
   */
  public toJSON(): UnknownObject {
    return {
      custodian: this.custodian,
      category: this.category,
      delegateeCustodian: this.delegateeCustodian,
      dacId: this.dacId,
    };
  }

  /**
   * Creates an instance of the `Delegatecat` class.
   *
   * @static
   * @public
   * @param string custodian
   * @param number category
   * @param string delegateeCustodian
   * @param string dacId
   * @returns `Delegatecat` An instance of the `Delegatecat` class.
   */
  public static create(
    custodian: string,
    category: number,
    delegateeCustodian: string,
    dacId: string,
    id?: string,
    rest?: UnknownObject
  ): Delegatecat {
    const entity = new Delegatecat(
      custodian,
      category,
      delegateeCustodian,
      dacId,
      id,
    );
    entity.rest = rest;

    return entity;
  }

  public static getDefault(): Delegatecat {
    return new Delegatecat(
      '',
      0,
      '',
      '',
    );
  }
}

