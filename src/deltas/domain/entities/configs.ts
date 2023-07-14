/**
 * Auto generated. DO NOT edit manually.
 * Last updated on: Fri, 14 Jul 2023 17:08:56 GMT
 */

import { Entity, UnknownObject } from "@alien-worlds/api-core";
import { Pair } from '@alien-worlds/eosio-contract-types';

/**
 * Represents a `Configs` object.
 *
 * @class
 */
export class Configs implements Entity {
  /**
   * Constructs a new instance of the `Configs` class.
   *
   * @public
   * @constructor
   * @param Pair[] data
   * @param string [id]
   * @returns `Configs` - An instance of the `Configs` class.
   */
  public constructor(
    public data: Pair[],
    public id?: string,
  ) {}

  public rest?: UnknownObject;

  /**
   * Converts the current instance of the `Configs` class to a JSON object.
   * 
   * @public
   * @returns {UnknownObject} The JSON representation of the instance.
   */
  public toJSON(): UnknownObject {
    return {
      data: this.data,
    };
  }

  /**
   * Creates an instance of the `Configs` class.
   *
   * @static
   * @public
   * @param Pair[] data
   * @returns `Configs` An instance of the `Configs` class.
   */
  public static create(
    data: Pair[],
    id?: string,
    rest?: UnknownObject
  ): Configs {
    const entity = new Configs(
      data,
      id,
    );
    entity.rest = rest;

    return entity;
  }

  public static getDefault(): Configs {
    return new Configs(
        []
,
    );
  }
}

