<template>
  <div id="default.vue">
    <nav class="bg-gray-800 p-4">
      <ul class="flex justify-center gap-x-4">
        <li><a href="/" class="text-white">Köszöntő</a></li>
        <li><a href="/eskuvo" class="text-white">Esküvő</a></li>
        <li><a href="/lakodalom" class="text-white">Lakodalom</a></li>
      </ul>
    </nav>
    <slot />
  </div>
</template>

<script lang="ts" setup></script>

<style></style>
