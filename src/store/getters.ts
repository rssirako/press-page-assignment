import { GetterTree } from 'vuex'
import { State, User } from './state'

export type Getters = {
  usersData(state: State): User[];
  loading(state: State): boolean;
  error(state: State): string;
}

export const getters: GetterTree<State, State> & Getters = {
  usersData(state) {
    return state.users;
  },
  loading(state) {
    return state.loading;
  },
  error(state) {
    return state.error;
  }
}
