<template>
  <div class="pt-20">
    <div class="flex lg:flex-row flex-col">
      <div class="lg:w-2/3 lg:px-20 pb-8 lg:pb-0">
        <a :href="$page.frontmatter.schemaUrl" target="_blank">
          <img :src="$page.frontmatter.image" class="border-2 border-solid border-gray-100 shadow-md"></img>
        </a>
      </div>
      <div class="lg:w-1/3">
        <div class="container flex flex-row">
          <h2 class="border border-solid border-black text-black px-2 w-8 rounded"> {{ $page.frontmatter.country }} </h2>
          <h2 class="pl-4"> {{ $page.frontmatter.title }} </h2>
        </div>
        <p class="text-xl"> {{ $page.frontmatter.description }} </p>
        <div class="container">
          <img src="/repo-icon.svg" class="inline-block w-6"/>
          <a :href="$page.frontmatter.repoUrl" target="_blank" class="inline-block text-lg text-black pl-4">Repository</a>  
        </div>
        <div class="container pt-2">
          <img src="/docs-icon.svg" class="inline-block w-6"/>
          <a :href="$page.frontmatter.docsUrl" target="_blank" class="inline-block text-lg text-black pl-4">Docs</a>  
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  
}
</script>

<style scoped>

</style>