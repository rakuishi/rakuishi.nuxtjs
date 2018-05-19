<template>
  <main role="main">
    <article itemscope itemtype="http://schema.org/BlogPosting">
      <h1 class="entry-title" itemprop="headline">{{ title }}</h1>
      <span class="entry-meta"><time itemprop="datePublished" :datetime="date">{{ date }}</time></span>
      <section itemprop="entry-text" v-html="bodyHtml" />
    </article>
  </main>
</template>

<script>
export default {
  asyncData({ params }) {
    return Object.assign(
      {},
      require(`~/static/content/archives/${params.slug}`)
    );
  }
};
</script>

<style>
</style>
