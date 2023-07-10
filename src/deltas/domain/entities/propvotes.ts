/**
 * Auto generated. DO NOT edit manually.
 * Last updated on: Mon, 10 Jul 2023 08:57:16 GMT
 */

import { Entity, UnknownObject } from "@alien-worlds/api-core";

/**
 * Represents a `Propvotes` object.
 *
 * @class
 */
export class Propvotes implements Entity {
  /**
   * Constructs a new instance of the `Propvotes` class.
   *
   * @public
   * @constructor
   * @param bigint voteId
   * @param string voter
   * @param string proposalId
   * @param bigint categoryId
   * @param string vote
   * @param string delegatee
   * @param string commentHash
   * @param string [id]
   * @returns `Propvotes` - An instance of the `Propvotes` class.
   */
  public constructor(
    public voteId: bigint,
    public voter: string,
    public proposalId: string,
    public categoryId: bigint,
    public vote: string,
    public delegatee: string,
    public commentHash: string,
    public id?: string,
  ) {}

  public rest?: UnknownObject;

  /**
   * Converts the current instance of the `Propvotes` class to a JSON object.
   * 
   * @public
   * @returns {UnknownObject} The JSON representation of the instance.
   */
  public toJSON(): UnknownObject {
    return {
      voteId: this.voteId,
      voter: this.voter,
      proposalId: this.proposalId,
      categoryId: this.categoryId,
      vote: this.vote,
      delegatee: this.delegatee,
      commentHash: this.commentHash,
    };
  }

  /**
   * Creates an instance of the `Propvotes` class.
   *
   * @static
   * @public
   * @returns `Propvotes` An instance of the `Propvotes` class.
   */
  public static create(
    voteId: bigint,
    voter: string,
    proposalId: string,
    categoryId: bigint,
    vote: string,
    delegatee: string,
    commentHash: string,
    id?: string,
    rest?: UnknownObject
  ): Propvotes {
    const entity = new Propvotes(
      voteId,
      voter,
      proposalId,
      categoryId,
      vote,
      delegatee,
      commentHash,
      id
    );
    entity.rest = rest;

    return entity;
  }

  public static getDefault(): Propvotes {
    return new Propvotes(
      0n,
      '',
      '',
      0n,
      '',
      '',
      '',
    );
  }
}

