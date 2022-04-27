<template>
  <div>
    <input
      type="text"
      placeholder="Search by name"
      v-model="name"
      @keyup="filter()"
    />
  </div>
</template>

<script>
import { ref } from "vue";
import { useStore } from "vuex";
export default {
  setup() {
    const store = useStore();
    const name = ref("");

    const filter = () => {
      store.dispatch("filterByName", name.value);
    };

    return { name, filter };
  },
};
</script>

<style></style>
