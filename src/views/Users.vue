<script lang="ts">
import { computed, defineComponent, onMounted } from "vue";

import UserCard from "../components/UserCard.vue";
import { useStore } from "../store";
import { User } from "../store/state";
import { ActionTypes } from "../store/actions";

export default defineComponent({
  components: { UserCard },
  setup() {
    const store = useStore();
    const loading = computed(() => store.getters.loading);
    const users = computed(() => store.getters.usersData);
    const error = computed(() => store.getters.error);
    const deleteCard = (user: User) => {
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      store.dispatch(ActionTypes.DeleteUser, user);
    };
    return { loading, users, error, deleteCard };
  },
});
</script>

<template>
  <div v-if="loading">
    <div id="q-app" style="min-height: 100vh">
      <div class="q-pa-md">
        <q-card style="max-width: 300px">
          <q-item> </q-item>
          <q-skeleton height="200px" square></q-skeleton>
          <q-item-section>
            <q-item-label>
              <q-skeleton type="text"></q-skeleton>
            </q-item-label>
            <q-item-label caption>
              <q-skeleton type="text"></q-skeleton>
            </q-item-label>
          </q-item-section>
          <q-card-actions align="left" class="q-gutter-md">
            <q-skeleton type="QBtn"></q-skeleton>
            <q-skeleton type="QBtn"></q-skeleton>
          </q-card-actions>
        </q-card>
      </div>
    </div>
  </div>
  <div v-if="error !== 'no error'">
    <p>We are experiencing technical dificulties. More details: {{ error }}</p>
  </div>
  <div else class="q-pa-md row items-start q-gutter-md">
    <UserCard
      else
      v-for="user in users"
      :key="user.id"
      :user-info="user"
      @deleteUser="deleteCard"
    />
  </div>
</template>
