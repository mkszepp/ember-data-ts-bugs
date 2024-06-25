import Model, { attr, hasMany } from '@ember-data/model';
import type PetModel from './pet';
import type { Type } from '@warp-drive/core-types/symbols';

export default class UserModel extends Model {
  @attr('string') declare name: string;

  @hasMany('pet', { async: false, inverse: 'user' }) declare pets?: PetModel[];

  relationshipNames() {
    // Error "Property 'relationshipsByName' does not exist on type 'Function'."
    return this.constructor.relationshipsByName;
  }

  declare [Type]: 'user';
}
