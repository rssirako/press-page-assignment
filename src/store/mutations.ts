import { MutationTree } from 'vuex'
import { State, User } from './state'

export enum MutationType {
  SetUsers = 'SET_USERS',
  DeleteUser = 'DELETE_USER',
  SetLoading = 'SET_LOADING',
  SetError = 'SET_ERROR',
}

export type Mutations = {
  [MutationType.SetUsers](state: State, users: User[]): void
  [MutationType.DeleteUser](
    state: State,
    user: Partial<User> & { id: number }
  ): void
  [MutationType.SetLoading](state: State, value: boolean): void
  [MutationType.SetError](state: State, value: string): void
}

export const mutations: MutationTree<State> & Mutations = {
  [MutationType.SetUsers](state, users) {
    state.users = users
  },
  [MutationType.DeleteUser](state, user) {
    state.users = state.users.filter((currUser) => currUser.id !== user.id);
  },
  [MutationType.SetLoading](state, value) {
    state.loading = value
  },
  [MutationType.SetError](state, value) {
    state.error = value
  }
}
