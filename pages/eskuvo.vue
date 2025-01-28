<template>
  <div>
    <header class="w-full text-center h-12">
      <PageHeading>Esküvő</PageHeading>
    </header>
    <div class="w-full bg-center bg-cover bg-[url('/images/maps_eskuvo.png')] h-64 md:h-96"></div>
    <div class="w-full mt-5">
      <div class="flex flex-col md:flex-row gap-4 justify-center">
        <div class="text-center">
          <h3>Zugligeti Szent Család Plébánia</h3>
          <div>1125. Szarvas Gábor út 52.</div>

          <MapButton class="mt-4" lat="47.51687720938038" long="18.985569587647085" />
        </div>
      </div>
    </div>
    <HighlightStrip>
      <MiddleHeading>Parkolás</MiddleHeading>
      <div class="flex flex-col md:flex-row gap-4 justify-center">
        <span class="text-center">
          A templom utcájában és a játszótér túloldalán, a Zugligeti úton is lehet parkolni.
        </span>
      </div>
    </HighlightStrip>
  </div>
</template>

<script lang="ts" setup>
const title = 'Esküvő helyszín';
const description = 'Kezdés: 15:00, cím: 1125. Szarvas Gábor út 52.';
useSeoMeta({
  title,
  description,
  ogType: 'website',
  ogUrl: 'https://lucaesbence.info/eskuvo',
  ogTitle: title,
  ogDescription: description,
  ogImage: 'https://lucaesbence.info/images/maps_eskuvo.png',
  ogImageWidth: '1200',
  ogImageHeight: '630',
  ogLocale: 'hu_HU',
  ogSiteName: 'Luca és Bence esküvője',
});
</script>
