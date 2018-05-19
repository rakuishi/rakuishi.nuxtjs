<template>
  <main>
    <div v-html="bodyHtml"></div>
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
