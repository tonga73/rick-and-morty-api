<template>
  <div class="flex justify-center pb-7">
    <input
      class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
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
