<template>
  <div class="pt-20">
    <div class="container py-8">
      <a href="/catalog/" class="text-black text-lg lg:px-20"> < Go back </a>
    </div>
    <div class="flex lg:flex-row flex-col">
      <div class="lg:w-2/3 lg:px-20 pb-8 lg:pb-0">
        <a :href="$page.frontmatter.schemaUrl" target="_blank">
          <img v-if="$page.frontmatter.image" :src="$page.frontmatter.image" class="border-2 border-solid border-gray-100 shadow-md"></img>
          <img v-if="!$page.frontmatter.image" src="https://www.pngkey.com/png/detail/518-5189986_curly-brackets-1.png" class="border-2 border-solid border-gray-100 shadow-md"></img>
        </a>
      </div>
      <div class="lg:w-1/3">
        <div v-if="$page.frontmatter.title.length <= 20" class="container flex flex-row">
          <h2 class="border border-solid border-black text-black px-2 w-8 rounded"> {{ $page.frontmatter.country }} </h2>
          <h2 class="pl-4"> {{ $page.frontmatter.title }} </h2>
        </div>
        <div v-if="$page.frontmatter.title.length > 20" class="container flex flex-col">
          <h2 class="border border-solid border-black text-black px-2 w-8 rounded"> {{ $page.frontmatter.country }} </h2>
          <h2 class=""> {{ $page.frontmatter.title }} </h2>
        </div>
        <p class="text-xl"> {{ $page.frontmatter.description }} </p>
        <div v-if="$page.frontmatter.repoUrl" class="container flex flex-row">
          <img src="/repo-icon.svg" class="w-6"/>
          <a :href="$page.frontmatter.repoUrl" target="_blank" class="text-lg text-black pl-4">Repository</a>  
        </div>
        <div v-if="$page.frontmatter.docsUrl" class="pt-2 container flex flex-row">
          <img src="/docs-icon.svg" class="w-6"/>
          <a :href="$page.frontmatter.docsUrl" target="_blank" class="text-lg text-black pl-4">Docs</a>  
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