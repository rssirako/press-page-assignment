<script lang="ts">
import { computed, defineComponent, onMounted } from "vue";
import HomeBanner from "../components/HomeBanner.vue";
// import { useStore } from "../store";
// import { ActionTypes } from "../store/actions";

export default defineComponent({
  components: { HomeBanner },
  setup() {
    // const store = useStore();

    // const loading = computed(() => store.state.loading);
    // onMounted(() => store.dispatch(ActionTypes.GetTodoItems));

    // const completedCount = computed(() => store.getters.completedCount);
    // const totalCount = computed(() => store.getters.totalCount);

    // return { loading, completedCount, totalCount };
  },
});
</script>

<template>
  <HomeBanner />
</template>
