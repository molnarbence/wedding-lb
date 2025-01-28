<template>
  <div>
    <header class="w-full text-center">
      <PageHeading>Nászajándék</PageHeading>
    </header>

    <div class="w-full mt-5">
      <div class="flex flex-col gap-4 justify-center">
        <div class="text-center">
          Háztartásunk teljes, nem is vágyunk másra <br />
          Csak közös életünk kezdetén egy kis támogatásra!
        </div>
        <div class="text-center">
          <h3>Takács Bence</h3>
          <div>bankszámlaszám</div>
          <div>abc123</div>
        </div>
        <div class="text-center">
          <h3>Revolut link/tag:</h3>
          <RevolutLinkButton tag="stitan" currency="huf" amount="1000" note="nászajándék" class="mt-2" />
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
const title = 'Nászajándék';
const description = 'Luca és Bence esküvője';

useSeoMeta({
  title,
  description,
  ogType: 'website',
  ogUrl: 'https://lucaesbence.info/naszajandek',
  ogTitle: title,
  ogDescription: description,
  ogImage: 'https://lucaesbence.info/images/hero_mini.jpg',
  ogImageWidth: '1200',
  ogImageHeight: '630',
  ogLocale: 'hu_HU',
  ogSiteName: 'Luca és Bence',
});
</script>
