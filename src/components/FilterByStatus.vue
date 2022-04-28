<template>
  <div class="grid grid-cols-4 gap-4 pt-10 pb-7">
    <div
      class="text-center text-white text-4x1 font-bold uppercase bg-teal-800 hover:bg-red-500 cursor-pointer"
      :class="color == '' ? 'bg-red-500 transition-colors' : ''"
      @click="filter('')"
    >
      All
    </div>
    <div
      class="text-center text-white text-4x1 font-bold uppercase bg-teal-800 hover:bg-red-500 cursor-pointer"
      :class="color == 'Dead' ? 'bg-red-500 transition-colors' : ''"
      @click="filter('Dead')"
    >
      Dead
    </div>
    <div
      class="text-center text-white text-4x1 font-bold uppercase bg-teal-800 hover:bg-red-500 cursor-pointer"
      :class="color == 'Alive' ? 'bg-red-500 transition-colors' : ''"
      @click="filter('Alive')"
    >
      Alive
    </div>
    <div
      class="text-center text-white text-4x1 font-bold uppercase bg-teal-800 hover:bg-red-500 cursor-pointer"
      :class="color == 'unknown' ? 'bg-red-500 transition-colors' : ''"
      @click="filter('unknown')"
    >
      Unknown
    </div>
  </div>
</template>

<script>
import { computed } from "vue";
import { useStore } from "vuex";
export default {
  setup() {
    const store = useStore();

    const filter = (status) => {
      store.dispatch("filterByStatus", status);

      setColor(status);
    };

    const setColor = (value) => {
      store.dispatch("changeMenuColor", value);
    };

    const color = computed(() => {
      return store.state.menuColor;
    });
    return { filter, color };
  },
};
</script>

<style></style>
