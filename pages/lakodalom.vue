<template>
  <div>
    <header class="mt-12">
      <div class="w-full bg-center bg-cover bg-[url('/images/maps_lakodalom.png')] h-64 md:h-96"></div>
    </header>
    <div class="w-full mt-5">
      <div class="flex flex-col md:flex-row gap-4 justify-center">
        <div class="text-center">
          <h3>Csónakház Mulató</h3>
          <div>{{ address }}</div>

          <MapButton class="mt-4" lat="47.5714874" long="19.0648622" />
        </div>
      </div>
    </div>
    <HighlightStrip>
      <BasicHeading>Parkolás</BasicHeading>
      <div class="flex flex-col md:flex-row gap-4 justify-center">
        <span class="text-center">
          A vacsorahelyszínen pedig limitált számú parkolási lehetőség van az épület mögött, a Monostori út felől
          érkezve
        </span>
      </div>
    </HighlightStrip>
  </div>
</template>

<script lang="ts" setup>
const title = 'Lakodalom helyszín';
const address = '1031. Római Part 30.';
const description = `Kezdés: 18:00, cím: ${address}`;
useSeoMeta({
  title,
  description,
  ogType: 'website',
  ogUrl: 'https://lucaesbence.info/lakodalom',
  ogTitle: title,
  ogDescription: description,
  ogImage: 'https://lucaesbence.info/images/maps_lakodalom.png',
  ogImageWidth: '1200',
  ogImageHeight: '630',
  ogLocale: 'hu_HU',
  ogSiteName: 'Luca és Bence esküvője',
});
</script>
