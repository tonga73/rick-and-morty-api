<template>
  <section>
    <div class="grid grid-cols-4 gap-4">
      <div v-for="character in characters" :key="character.id">
        <CardCharacter :character="character" />
      </div>
    </div>
  </section>
</template>

<script>
import { onMounted, computed } from "vue";
import { useStore } from "vuex";
import CardCharacter from "./CardCharacter.vue";
export default {
  components: { CardCharacter },
  setup() {
    const store = useStore();
    const characters = computed(() => {
      return store.state.charactersFilter;
    });
    onMounted(() => {
      store.dispatch("getCharacters");
    });
    return {
      characters,
    };
  },
};
</script>

<style></style>
