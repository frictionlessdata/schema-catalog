<template>
  <div class="banner home text-center">
    <h1 class="text-6xl font-normal"> {{ $page.frontmatter.title }} </h1>
    <p class="text-xl"> {{ $page.frontmatter.description }} </p>
    <button class="main-button"><a class="text-white" href="/about/">Read More</a></button>
    <button class="main-button"><a class="text-white" href="/catalog/">See Catalog</a></button>
  </div>
</template>

<script>
export default {
  
}
</script>

<style scoped>

.home {
  margin-top: 10rem!important;
}

</style>