/**
 * Auto generated. DO NOT edit manually.
 * Last updated on: Fri, 14 Jul 2023 17:08:56 GMT
 */

import { Entity, UnknownObject } from "@alien-worlds/api-core";

/**
 * Represents a `Undelegateca` object.
 *
 * @class
 */
export class Undelegateca implements Entity {
  /**
   * Constructs a new instance of the `Undelegateca` class.
   *
   * @public
   * @constructor
   * @param string custodian
   * @param number category
   * @param string dacId
   * @param string [id]
   * @returns `Undelegateca` - An instance of the `Undelegateca` class.
   */
  public constructor(
    public custodian: string,
    public category: number,
    public dacId: string,
    public id?: string,
  ) {}

  public rest?: UnknownObject;

  /**
   * Converts the current instance of the `Undelegateca` class to a JSON object.
   * 
   * @public
   * @returns {UnknownObject} The JSON representation of the instance.
   */
  public toJSON(): UnknownObject {
    return {
      custodian: this.custodian,
      category: this.category,
      dacId: this.dacId,
    };
  }

  /**
   * Creates an instance of the `Undelegateca` class.
   *
   * @static
   * @public
   * @param string custodian
   * @param number category
   * @param string dacId
   * @returns `Undelegateca` An instance of the `Undelegateca` class.
   */
  public static create(
    custodian: string,
    category: number,
    dacId: string,
    id?: string,
    rest?: UnknownObject
  ): Undelegateca {
    const entity = new Undelegateca(
      custodian,
      category,
      dacId,
      id,
    );
    entity.rest = rest;

    return entity;
  }

  public static getDefault(): Undelegateca {
    return new Undelegateca(
      '',
      0,
      '',
    );
  }
}

