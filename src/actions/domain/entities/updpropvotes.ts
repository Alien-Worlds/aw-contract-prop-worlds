/**
 * Auto generated. DO NOT edit manually.
 * Last updated on: Thu, 27 Jul 2023 15:06:33 GMT
 */

import { Entity, UnknownObject } from "@alien-worlds/aw-core";

/**
 * Represents a `Updpropvotes` object.
 *
 * @class
 */
export class Updpropvotes implements Entity {
  /**
   * Constructs a new instance of the `Updpropvotes` class.
   *
   * @public
   * @constructor
   * @param string proposalId
   * @param string dacId
   * @param string [id]
   * @returns `Updpropvotes` - An instance of the `Updpropvotes` class.
   */
  public constructor(
    public proposalId: string,
    public dacId: string,
    public id?: string,
  ) {}

  public rest?: UnknownObject;

  /**
   * Converts the current instance of the `Updpropvotes` class to a JSON object.
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
   * Creates an instance of the `Updpropvotes` class.
   *
   * @static
   * @public
   * @param string proposalId
   * @param string dacId
   * @returns `Updpropvotes` An instance of the `Updpropvotes` class.
   */
  public static create(
    proposalId: string,
    dacId: string,
    id?: string,
    rest?: UnknownObject
  ): Updpropvotes {
    const entity = new Updpropvotes(
      proposalId,
      dacId,
      id,
    );
    entity.rest = rest;

    return entity;
  }

  public static getDefault(): Updpropvotes {
    return new Updpropvotes(
      '',
      '',
    );
  }
}

