<template>
  <div>
    <img :src="character.image" :alt="character.name" />
    <div>
      <h3>
        {{ character.name }}
      </h3>
      <div>
        <span></span>
        <span> {{ character.status }} - {{ character.species }} </span>
      </div>
      <div>
        <span> Origin: {{ character.origin.name }} </span>
      </div>
      <div>Location: {{ character.location.name }}</div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["character"],
  created() {
    console.log(this.character);
  },
};
</script>

<style></style>
