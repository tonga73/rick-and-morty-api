<template>
  <div @click="filter('')">All</div>
  <div @click="filter('Alive')">Alive</div>
  <div @click="filter('Dead')">Dead</div>
  <div @click="filter('unknown')">Unknown</div>
</template>

<script>
import { useStore } from "vuex";
export default {
  setup() {
    const store = useStore();

    const filter = (status) => {
      store.dispatch("filterByStatus", status);
    };

    return { filter };
  },
};
</script>

<style></style>
