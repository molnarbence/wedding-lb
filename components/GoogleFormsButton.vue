<script setup lang="ts">
defineProps<{
  link: string;
}>();
</script>
<template>
  <div>
    <a
      :href="link"
      class="inline-flex text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none font-medium rounded-lg text-sm px-5 py-2.5 text-center items-center dark:bg-blue-600 dark:hover:bg-blue-700"
    >
      <FormsIcon />
      Google Forms Link
    </a>
  </div>
</template>
