<template>
  <div>
    <nav class="bg-gray-800 p-4">
      <ul class="flex justify-center space-x-4">
        <li><a href="/" class="text-white">Köszöntő</a></li>
        <li><a href="/eskuvo" class="text-white">Esküvő</a></li>
        <li><a href="/lakodalom" class="text-white">Lakodalom</a></li>
      </ul>
    </nav>
    <header class="my-12">
      <div class="w-full bg-center bg-cover bg-[url('/images/hero.jpg')] h-64 lg:h-96">
        <div class="flex flex-col justify-end w-full h-full">
          <div class="text-center">
            <div class="container mx-auto">
              <div class="max-w-4xl mx-auto text-center">
                <h1 class="font-tangerine text-gray-100 text-6xl lg:text-7xl mb-2">Luca és Bence</h1>
                <!-- <h2 class="font-ysabeau text-gray-100 text-xl lg:text-2xl">2025. május 10.</h2> -->
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="w-full">
        <div class="flex flex-col md:flex-row justify-center gap-4 my-10">
          <div class="text-center">
            <h3>Hol?</h3>
            <span>Zugligeti Szent Család Plébánia</span>
            <span></span>
          </div>
          <div class="text-center">
            <h3>Mikor?</h3>
            <span>2025. május 10.</span>
            <span>15:00</span>
          </div>
        </div>
      </div>
      <!-- <div class="w-full bg-[#eeedeb]">Section 2</div> -->
    </header>
  </div>
</template>

<script lang="ts" setup>
useSeoMeta({
  title: 'Köszöntő',
  description: 'Luca és Bence esküvője',
  ogDescription: 'Luca és Bence esküvője',
  image: '/images/hero.jpg',
  url: 'https://lucaesbence.info',
  ogImage: 'https://lucaesbence.info/images/hero.jpg',
});
</script>

<style></style>
