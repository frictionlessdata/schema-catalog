<template>
  <div class="pt-20">
    <h1 class="pb-4"> {{ $page.frontmatter.title }} </h1>
    <div class="grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-12">
      <div class="rounded shadow-md border-2 border-solid border-gray-100">
        <a class="" href="/catalog/base-adresse-locale/">
          <img src="/base-adresse-locale.png"/>
          <div class="schema-title bg-black bg-opacity-50 pl-4 py-4 text-white text-xl font-normal"> Base adresse locale </div>
        </a>
      </div>
      <div class="rounded py-32 shadow-md border-2 border-solid border-gray-100"></div>
      <div class="rounded py-32 shadow-md border-2 border-solid border-gray-100"></div>
      <div class="rounded py-32 shadow-md border-2 border-solid border-gray-100"></div>
      <div class="rounded py-32 shadow-md border-2 border-solid border-gray-100"></div>
      <div class="rounded py-32 shadow-md border-2 border-solid border-gray-100"></div>
    </div>
  </div>
</template>

<script>
export default {
  
}
</script>

<style scoped>

h1 {
  font-weight: 400;
}

a:hover {
  text-decoration-color: white!important;
}

</style>
