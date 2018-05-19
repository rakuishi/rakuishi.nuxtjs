<template>
  <main>
    <ul>
      <li v-for="post in posts" :key="post.slug">
        <nuxt-link :to="`/archives/${post.slug}`">{{ post.title }}</nuxt-link>
      </li>
    </ul>
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
      posts: posts.reverse()
    };
  }
};
</script>

<style>
</style>
