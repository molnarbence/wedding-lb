<template>
  <div>
    <header class="w-full text-center">
      <PageHeading>Visszajelzés</PageHeading>
    </header>

    <div class="w-full mt-5">
      <div class="flex flex-col justify-center gap-4">
        <div class="text-center">
          Nagyon örülünk, hogy tudtok velünk ünnepelni! <br />
          Légyszi jelezzetek vissza ezen a linken április 13-ig.
        </div>
        <div class="text-center">
          <GoogleFormsButton link="https://forms.gle/mysDdXKzt2LqBUtk7" />
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
const title = 'Visszajelzés határideje: április 13.';
const description = 'Luca és Bence esküvője';
useSeoMeta({
  title,
  description,
  ogType: 'website',
  ogUrl: 'https://lucaesbence.info/visszajelzes',
  ogTitle: title,
  ogDescription: description,
  ogImage: 'https://lucaesbence.info/images/hero_mini.jpg',
  ogImageWidth: '1200',
  ogImageHeight: '630',
  ogLocale: 'hu_HU',
  ogSiteName: 'Luca és Bence esküvője',
});
</script>
