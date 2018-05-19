<template>
  <main>
    <ul>
      <li v-for="post in posts" :key="post.slug">
        {{ post.title }}
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
      posts.push(index.fileMap[`static/content/archives/${slug}.json`]);
    });
    return {
      posts: posts.reverse()
    };
  }
};
</script>

<style>
</style>
