<template>
  <div id="default.vue">
    <nav class="bg-gray-800 p-4">
      <ul class="flex justify-center gap-x-4 text-white">
        <li><a href="/">Köszöntő</a></li>
        <li><a href="/eskuvo">Esküvő</a></li>
        <li><a href="/lakodalom">Lakodalom</a></li>
        <li><a href="/naszajandek">Nászajándék</a></li>
        <li><a href="/visszajelzes">Visszajelzés</a></li>
      </ul>
    </nav>
    <slot />
  </div>
</template>

<script lang="ts" setup></script>

<style></style>
