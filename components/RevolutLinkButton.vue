<script setup lang="ts">
defineProps<{
  tag: string;
  currency: string;
  amount: string;
  note: string;
}>();
</script>

<template>
  <div>
    <a
      :href="`${encodeURI(`https://revolut.me/${tag}/${currency}${amount}/${note}`)}`"
      class="hidden sm:inline-flex text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none font-medium rounded-lg text-sm px-5 py-2.5 text-center items-center me-2 dark:bg-blue-600 dark:hover:bg-blue-700"
    >
      <RevolutIcon />
      {{ tag }}
    </a>
    <!-- <a
      :href="`revolut://send?tag=${tag}&currency=${currency}&amount=${amount}&note=${note}`"
      class="inline-flex sm:hidden text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none font-medium rounded-lg text-sm px-5 py-2.5 text-center items-center me-2 dark:bg-blue-600 dark:hover:bg-blue-700"
    >
      <RevolutIcon />
      {{ tag }}
    </a> -->
  </div>
</template>
