<template>
  <div>
    <h1>Rick and Morty</h1>
    <FilterByStatus />
    <FilterByName />
    <ListCharacters />
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
