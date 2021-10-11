import { ActionContext, ActionTree } from "vuex";
import { Mutations, MutationType } from "./mutations";
import { State, User } from "./state";
import getUsers from "@/utils/getUsersData";
import axios from "axios";

export enum ActionTypes {
  GetUsers = "GET_USERS",
  DeleteUser = "DELETE_USER",
}

type ActionAugments = Omit<ActionContext<State, State>, "commit"> & {
  commit<K extends keyof Mutations>(
    key: K,
    payload: Parameters<Mutations[K]>[1]
  ): ReturnType<Mutations[K]>;
};

export type Actions = {
  [ActionTypes.GetUsers](context: ActionAugments): void;
  [ActionTypes.DeleteUser](context: ActionAugments, user: User): void;
};

export const actions: ActionTree<State, State> & Actions = {
  async [ActionTypes.GetUsers]({ commit }) {
    commit(MutationType.SetLoading, true);
    await axios
      .get("https://api.github.com/users?per_page=10")
      .then((response) => {
        response.data;
        commit(MutationType.SetLoading, false);
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        commit(MutationType.SetUsers, response.data);
      })
      .catch((error) => {
        commit(MutationType.SetLoading, false);
        commit(MutationType.SetError, error);
        console.log(error);
      });
  },
  async [ActionTypes.DeleteUser]({ commit }, user) {
    commit(MutationType.DeleteUser, user);
  },
};
