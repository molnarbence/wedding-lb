<script setup lang="ts">
defineProps<{
  geo: string;
  maps: string;
}>();
</script>

<template>
  <div>
    <a
      :href="geo"
      class="inline-flex sm:hidden text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center items-center me-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
    >
      <MapIcon />
      Navigálás
    </a>
    <a
      :href="maps"
      target="_blank"
      class="hidden sm:inline-flex text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center items-center me-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
    >
      <MapIcon />
      Térkép
    </a>
  </div>
</template>
