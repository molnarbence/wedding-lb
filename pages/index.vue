<template>
  <div>
    <header class="mt-12">
      <div class="w-full bg-center bg-cover bg-[url('/images/hero.jpg')] h-64 md:h-96">
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
          <h3>Hol?</h3>
          <span>Zugligeti Szent Család Plébánia</span>
        </div>
        <div class="text-center">
          <h3>Mikor?</h3>
          <span>2025. május 10.</span>
          <span>15:00</span>
        </div>
      </div>
    </div>

    <HighlightStrip>
      <BasicHeading>Program</BasicHeading>
      <div class="flex flex-col justify-center gap-4">
        <div v-for="item in program" :key="item.time" class="flex flex-col md:flex-row gap-4 justify-center">
          <span class="text-center"> {{ item.time }} - {{ item.title }} </span>
        </div>
      </div>
    </HighlightStrip>
  </div>
</template>

<script lang="ts" setup>
useSeoMeta({
  title: 'Köszöntő',
  description: 'Luca és Bence esküvője',
  // image: 'https://lucaesbence.info/images/hero_mini.jpg',
  // url: 'https://lucaesbence.info',
  ogType: 'website',
  ogUrl: 'https://lucaesbence.info',
  ogTitle: 'Köszöntő',
  ogDescription: 'Luca és Bence esküvője',
  ogImage: 'https://lucaesbence.info/images/hero_mini.jpg',
  ogImageWidth: '1200',
  ogImageHeight: '630',
  ogLocale: 'hu_HU',
  // ogLogo: 'https://lucaesbence.info/images/hero_mini.jpg',
  ogSiteName: 'Luca és Bence',
});

interface ProgramItem {
  time: string;
  title: string;
}

const program: ProgramItem[] = [
  {
    time: '15:00',
    title: 'Esküvő',
  },
  {
    time: '16:00',
    title: 'Állófogadás és fotózkodás a templomkertben',
  },
  {
    time: '18:00',
    title: 'Érkezés a vacsora helyszínére',
  },
  {
    time: '18:30',
    title: 'Megnyitó beszédek',
  },
  {
    time: '19:00',
    title: 'Vacsora',
  },
  {
    time: '20:30',
    title: 'Buli',
  },
  {
    time: '22:00',
    title: 'Torta',
  },
  {
    time: '00:00',
    title: 'Éjféli menü',
  },
];
</script>

<style></style>
