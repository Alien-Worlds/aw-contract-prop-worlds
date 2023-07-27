/**
 * Auto generated. DO NOT edit manually.
 * Last updated on: Thu, 27 Jul 2023 15:06:33 GMT
 */

import { Entity, UnknownObject } from "@alien-worlds/aw-core";

/**
 * Represents a `Comment` object.
 *
 * @class
 */
export class Comment implements Entity {
  /**
   * Constructs a new instance of the `Comment` class.
   *
   * @public
   * @constructor
   * @param string commenter
   * @param string proposalId
   * @param string comment
   * @param string commentCategory
   * @param string dacId
   * @param string [id]
   * @returns `Comment` - An instance of the `Comment` class.
   */
  public constructor(
    public commenter: string,
    public proposalId: string,
    public comment: string,
    public commentCategory: string,
    public dacId: string,
    public id?: string,
  ) {}

  public rest?: UnknownObject;

  /**
   * Converts the current instance of the `Comment` class to a JSON object.
   * 
   * @public
   * @returns {UnknownObject} The JSON representation of the instance.
   */
  public toJSON(): UnknownObject {
    return {
      commenter: this.commenter,
      proposalId: this.proposalId,
      comment: this.comment,
      commentCategory: this.commentCategory,
      dacId: this.dacId,
    };
  }

  /**
   * Creates an instance of the `Comment` class.
   *
   * @static
   * @public
   * @param string commenter
   * @param string proposalId
   * @param string comment
   * @param string commentCategory
   * @param string dacId
   * @returns `Comment` An instance of the `Comment` class.
   */
  public static create(
    commenter: string,
    proposalId: string,
    comment: string,
    commentCategory: string,
    dacId: string,
    id?: string,
    rest?: UnknownObject
  ): Comment {
    const entity = new Comment(
      commenter,
      proposalId,
      comment,
      commentCategory,
      dacId,
      id,
    );
    entity.rest = rest;

    return entity;
  }

  public static getDefault(): Comment {
    return new Comment(
      '',
      '',
      '',
      '',
      '',
    );
  }
}

