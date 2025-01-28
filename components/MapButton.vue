<script setup lang="ts">
defineProps<{
  lat: string;
  long: string;
}>();
</script>

<template>
  <div>
    <a
      :href="`geo:0,0?q=${lat},${long}`"
      target="_blank"
      class="inline-flex sm:hidden text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center items-center me-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
    >
      <MapIcon />
      Navigálás
    </a>
    <a
      :href="`https://www.google.com/maps/search/?api=1&query=${lat},${long}`"
      target="_blank"
      class="hidden sm:inline-flex text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center items-center me-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
    >
      <MapIcon />
      Térkép
    </a>
  </div>
</template>
