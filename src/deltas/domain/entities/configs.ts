/**
 * Auto generated. DO NOT edit manually.
 * Last updated on: Mon, 10 Jul 2023 08:57:16 GMT
 */

import { Entity, UnknownObject } from "@alien-worlds/api-core";

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
   * @param PairStringStateValueVariant[] data
   * @param string [id]
   * @returns `Configs` - An instance of the `Configs` class.
   */
  public constructor(
    public data: PairStringStateValueVariant[],
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
   * @returns `Configs` An instance of the `Configs` class.
   */
  public static create(
    data: PairStringStateValueVariant[],
    id?: string,
    rest?: UnknownObject
  ): Configs {
    const entity = new Configs(
      data,
      id
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

/**
 * Represents a `PairStringStateValueVariant` object.
 *
 * @class
 */
export class PairStringStateValueVariant implements Entity {
  /**
   * Constructs a new instance of the `PairStringStateValueVariant` class.
   *
   * @public
   * @constructor
   * @param string key
   * @param Array<unknown> value
   * @param string [id]
   * @returns `PairStringStateValueVariant` - An instance of the `PairStringStateValueVariant` class.
   */
  public constructor(
    public key: string,
    public value: Array<unknown>,
    public id?: string,
  ) {}

  public rest?: UnknownObject;

  /**
   * Converts the current instance of the `PairStringStateValueVariant` class to a JSON object.
   * 
   * @public
   * @returns {UnknownObject} The JSON representation of the instance.
   */
  public toJSON(): UnknownObject {
    return {
      key: this.key,
      value: this.value,
    };
  }

  /**
   * Creates an instance of the `PairStringStateValueVariant` class.
   *
   * @static
   * @public
   * @returns `PairStringStateValueVariant` An instance of the `PairStringStateValueVariant` class.
   */
  public static create(
    key: string,
    value: Array<unknown>,
    id?: string,
    rest?: UnknownObject
  ): PairStringStateValueVariant {
    const entity = new PairStringStateValueVariant(
      key,
      value,
      id
    );
    entity.rest = rest;

    return entity;
  }

  public static getDefault(): PairStringStateValueVariant {
    return new PairStringStateValueVariant(
      '',
      [],
    );
  }
}

