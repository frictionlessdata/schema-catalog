<template>
  <div class="banner home text-center">
    <h1 class="text-6xl font-normal"> {{ $page.frontmatter.title }} </h1>
    <p class="text-xl"> {{ $page.frontmatter.description }} </p>
    <a class="text-white" href="/about/"><button class="main-button">Read More</button></a>
    <a class="text-white" href="/catalog/"><button class="main-button">See Catalog</button></a>
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