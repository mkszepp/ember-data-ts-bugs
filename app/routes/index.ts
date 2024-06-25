import Route from '@ember/routing/route';
import { service } from '@ember/service';
import type Store from '@ember-data/store';
import UserModel from '../models/user';

export default class IndexRoute extends Route {
  @service declare store: Store;
  async model() {
    let user: UserModel | null = null;

    const users = await this.store.findAll<UserModel>('user', {
      // Error "Type 'string' is not assignable to type 'undefined[]'.ts(2322)"
      include: 'pet',
    });

    const firstUser = users[0];

    if (firstUser != undefined) {
      // Error Argument of type 'string | null' is not assignable to parameter of type 'string | number'.
      // Type 'null' is not assignable to type 'string | number'.ts(2345)
      user = await this.store.findRecord<UserModel>('user', firstUser.id, {
        include: 'pet',
      });
    }

    return user;
  }
}
