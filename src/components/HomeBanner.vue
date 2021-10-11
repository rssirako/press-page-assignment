<script lang="ts">
import { defineComponent } from "vue";
import { useStore } from "../store";
import { ActionTypes } from "../store/actions";

export default defineComponent({
  setup() {
    const store = useStore();

    const fetchUsersData = () => {
      if (store.getters.usersData && store.getters.usersData.length !== 0) {
        return;
      }
      store.dispatch(ActionTypes.GetUsers);
    };
    return { fetchUsersData };
  },
});
</script>

<template>
  <div id="q-app" style="min-height: 100vh">
    <div class="q-pa-md q-gutter-sm">
      <q-banner rounded class="bg-grey-3">
        <template v-slot:avatar>
          <img src="../assets/logo.svg" style="width: 250px; height: 250px" />
        </template>

        Please press See Users button to see github users.
        <template v-slot:action>
          <router-link to="/users" @click="fetchUsersData">
            <q-btn
              size="22px"
              class="q-px-xl q-py-xs"
              color="green"
              label="See Github Users"
            ></q-btn>
          </router-link>
        </template>
      </q-banner>
    </div>
  </div>
</template>

<style scoped lang="scss">
#q-app {
  a {
    text-decoration: none;
    &.router-link-exact-active {
      text-decoration: none;
    }
  }
}
</style>