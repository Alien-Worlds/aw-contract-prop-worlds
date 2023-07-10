/**
 * Auto generated. DO NOT edit manually.
 * Last updated on: Mon, 10 Jul 2023 08:57:16 GMT
 */

import { Entity, UnknownObject } from "@alien-worlds/api-core";

/**
 * Represents a `Updateconfig` object.
 *
 * @class
 */
export class Updateconfig implements Entity {
  /**
   * Constructs a new instance of the `Updateconfig` class.
   *
   * @public
   * @constructor
   * @param Config newConfig
   * @param string dacId
   * @param string [id]
   * @returns `Updateconfig` - An instance of the `Updateconfig` class.
   */
  public constructor(
    public newConfig: Config,
    public dacId: string,
    public id?: string,
  ) {}

  public rest?: UnknownObject;

  /**
   * Converts the current instance of the `Updateconfig` class to a JSON object.
   * 
   * @public
   * @returns {UnknownObject} The JSON representation of the instance.
   */
  public toJSON(): UnknownObject {
    return {
      newConfig: this.newConfig,
      dacId: this.dacId,
    };
  }

  /**
   * Creates an instance of the `Updateconfig` class.
   *
   * @static
   * @public
   * @returns `Updateconfig` An instance of the `Updateconfig` class.
   */
  public static create(
    newConfig: Config,
    dacId: string,
    id?: string,
    rest?: UnknownObject
  ): Updateconfig {
    const entity = new Updateconfig(
      newConfig,
      dacId,
      id
    );
    entity.rest = rest;

    return entity;
  }

  public static getDefault(): Updateconfig {
    return new Updateconfig(
      Config.getDefault(),
      '',
    );
  }
}

/**
 * Represents a `Config` object.
 *
 * @class
 */
export class Config implements Entity {
  /**
   * Constructs a new instance of the `Config` class.
   *
   * @public
   * @constructor
   * @param number proposalThreshold
   * @param number finalizeThreshold
   * @param number approvalDuration
   * @param string [id]
   * @returns `Config` - An instance of the `Config` class.
   */
  public constructor(
    public proposalThreshold: number,
    public finalizeThreshold: number,
    public approvalDuration: number,
    public id?: string,
  ) {}

  public rest?: UnknownObject;

  /**
   * Converts the current instance of the `Config` class to a JSON object.
   * 
   * @public
   * @returns {UnknownObject} The JSON representation of the instance.
   */
  public toJSON(): UnknownObject {
    return {
      proposalThreshold: this.proposalThreshold,
      finalizeThreshold: this.finalizeThreshold,
      approvalDuration: this.approvalDuration,
    };
  }

  /**
   * Creates an instance of the `Config` class.
   *
   * @static
   * @public
   * @returns `Config` An instance of the `Config` class.
   */
  public static create(
    proposalThreshold: number,
    finalizeThreshold: number,
    approvalDuration: number,
    id?: string,
    rest?: UnknownObject
  ): Config {
    const entity = new Config(
      proposalThreshold,
      finalizeThreshold,
      approvalDuration,
      id
    );
    entity.rest = rest;

    return entity;
  }

  public static getDefault(): Config {
    return new Config(
      0,
      0,
      0,
    );
  }
}
