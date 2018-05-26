<template>
  <div class="container">
    <blog-header/>
    <nuxt/>
    <blog-footer/>
  </div>
</template>

<script>
import BlogHeader from '~/components/BlogHeader';
import BlogFooter from '~/components/BlogFooter';

export default {
  components: {
    BlogHeader,
    BlogFooter,
  },
};
</script>

<style>
</style>
