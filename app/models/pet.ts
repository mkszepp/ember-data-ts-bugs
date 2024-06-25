import Model, { attr, belongsTo } from '@ember-data/model';
import type UserModel from './user';

export default class PetModel extends Model {
  @attr('string') declare name: string;

  @belongsTo('pet', { async: false, inverse: 'users' })
  declare user?: UserModel;
}
