<template>
  <main role="main">
    <article
      v-for="post in posts" :key="post.slug"
      itemscope itemtype="http://schema.org/Blog">
      <h2 class="entry-title" itemprop="headline"><nuxt-link :to="`/archives/${post.slug}`">{{ post.title }}</nuxt-link></h2>
      <span class="entry-meta"><time itemprop="datePublished" :datetime="post.date">{{ post.date }}</time></span>
    </article>
  </main>
</template>

<script>
export default {
  asyncData() {
    const index = require("~/static/content/archives/index.json");
    let posts = [];
    index.sourceFileArray.map(sourceFile => {
      const slug = sourceFile
        .replace(/^content\/archives\//, "")
        .replace(/\.md$/, "");
      let post = index.fileMap[`static/content/archives/${slug}.json`];
      post.slug = post.base.replace(/\.json$/, "");
      posts.push(post);
    });
    return {
      // TODO: Use pagination
      posts: posts.reverse().splice(0, 25)
    };
  }
};
</script>

<style>
</style>
