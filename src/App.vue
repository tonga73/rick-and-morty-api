<template>
  <div class="bg-gray-900 grid justify-center">
    <div class="flex justify-center w-full">
      <h1 class="text-blue-400 text-9xl uppercase font-bold">Rick and Morty</h1>
    </div>
    <div class="px-4">
      <FilterByStatus />
      <FilterByName />
      <ListCharacters />
    </div>
  </div>
</template>

<script>
import ListCharacters from "./components/ListCharacters.vue";
import FilterByStatus from "./components/FilterByStatus.vue";
import FilterByName from "./components/FilterByName.vue";
export default {
  name: "App",
  components: { ListCharacters, FilterByStatus, FilterByName },
};
</script>

<style lang="scss"></style>
