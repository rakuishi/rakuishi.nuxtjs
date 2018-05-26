<template>
  <main role="main">
    <article itemscope itemtype="http://schema.org/BlogPosting">
      <h1 class="entry-title" itemprop="headline">{{ title }}</h1>
      <span class="entry-meta"><time itemprop="datePublished" :datetime="date">{{ date | formattedDatetime }}</time></span>
      <section itemprop="entry-text" v-html="bodyHtml" />
    </article>
  </main>
</template>

<script>
import { formattedDatetime } from '~/assets/js/time.js';

export default {
  asyncData({ params }) {
    return Object.assign(
      {},
      require(`~/static/content/archives/${params.slug}`)
    );
  },
  filters: {
    formattedDatetime,
  },
};
</script>

<style>
</style>
