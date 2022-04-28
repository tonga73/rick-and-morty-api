<template>
  <div
    class="grid grid-cols-1 bg-white border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700 hover:cursor-pointer hover:scale-105 transition-all hover:transition-all"
  >
    <img
      class="col-span-full w-full"
      :src="character.image"
      :alt="character.name"
    />
    <div>
      <h3 class="text-stone-100 text-right font-extrabold p-3 text-2xl">
        {{ character.name }}
      </h3>
      <div class="flex justify-end pb-3 pr-3">
        <span
          class="inline-flex p-3 mr-2 rounded-full"
          :class="
            character.status == 'Alive'
              ? 'bg-green-700'
              : '' || character.status == 'Dead'
              ? 'bg-red-700'
              : '' || character.status == 'unknown'
              ? 'bg-violet-700'
              : ''
          "
        ></span>
        <span class="text-stone-100 italic">
          {{ character.status }} - {{ character.species }}
        </span>
      </div>
      <div class="flex justify-center pb-3">
        <span class="text-stone-100 font-semibold">
          Origin: {{ character.origin.name }}
        </span>
      </div>
      <div
        class="grid justify-center pb-1 text-stone-100 font-semibold leading-none"
      >
        <div class="text-center uppercase text-xs text-gray-400">Location</div>
        <span class="uppercase font-extrabold text-blue-500"
          >{{ character.location.name }}
        </span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["character"],
};
</script>

<style></style>
