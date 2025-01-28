<template>
  <div>
    <header class="mt-12">
      <div class="w-full bg-center bg-cover bg-[url('/images/maps_eskuvo.png')] h-64 md:h-96">
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
      <!-- <div class="w-full bg-[#eeedeb]">Section 2</div> -->
    </header>
    <div class="w-full mt-5">
      <div class="flex flex-col md:flex-row gap-4 justify-center">
        <div class="text-center">
          <h3>Zugligeti Szent Család Plébánia</h3>
          <div>1125. Szarvas Gábor út 52.</div>
          <div class="sm:hidden"><a href="geo:47.5185,19.0155">Térkép</a></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
const description = 'Kezdés: 15:00, cím: 1125. Szarvas Gábor út 52.';
useSeoMeta({
  title: 'Esküvő helyszín',
  description,
  ogType: 'website',
  ogUrl: 'https://lucaesbence.info/eskuvo',
  ogTitle: 'Esküvő helyszín',
  ogDescription: description,
  ogImage: 'https://lucaesbence.info/images/maps_eskuvo.png',
  ogImageWidth: '1200',
  ogImageHeight: '630',
  ogLocale: 'hu_HU',
  ogSiteName: 'Luca és Bence esküvője',
});
</script>
