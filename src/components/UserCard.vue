<script lang="ts">
import { computed, defineComponent, PropType } from "vue";
import { User } from "../store/state";

export default defineComponent({
  props: {
    userInfo: { type: Object as PropType<User>, required: true },
  },
  emits: ["deleteUser"],
  setup(props, context) {
    console.log(props.userInfo.id);
    const user = computed(() => props.userInfo);
    const onDeleteUser = () => {
      context.emit("deleteUser", props.userInfo);
    };
    return { user, onDeleteUser };
  },
});
</script>

<template>
  <q-card class="my-card">
    <q-img :src="`${user.avatar_url}`"></q-img>

    <q-card-section>
      <div class="row no-wrap items-center">
        <div class="col text-h6 ellipsis">Username: {{ user.login }}</div>
      </div>
    </q-card-section>
    <q-card-section class="q-pt-none">
      <a href="`${user.repos_url}`">{{ user.repos_url }}</a>
    </q-card-section>

    <q-separator></q-separator>

    <q-card-actions>
      <q-btn flat round icon="delete" @click="onDeleteUser"></q-btn>
      <q-btn flat color="primary" @click="onDeleteUser"> Delete </q-btn>
    </q-card-actions>
  </q-card>
</template>
