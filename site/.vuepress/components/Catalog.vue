<template>
  <div class="pt-20">
    <h1 class="pb-4"> {{ $page.frontmatter.title }} </h1>
    <div v-for="data in myJson" class="catalog-card mr-10 mb-6 ">
      <div class="rounded shadow-md border-2 border-solid border-gray-100">
        <a class="" :href="getLink(data.title)">
          <img src="https://www.pngkey.com/png/detail/518-5189986_curly-brackets-1.png"/>
          <div class="py-6 px-4"> 
            <span v-if="data.title.length > 25" class="text-xl text-black font-normal"> {{ data.title }} </span>
            <span v-if="data.title.length < 25" class="text-xl text-black font-normal"> {{ data.title }} <br><span class="text-white"> {{ data.title }} </span></span>
          </div>
        </a>
      </div>
    </div>
  </div>
</template>

<script>
import json from '../../json/catalog.json'
import { getLink } from '../util'

export default {
  methods: {
    getLink
  },
  data(){
    return {
        myJson: json
    } 
  }
}
</script>

<style scoped>

h1 {
  font-weight: 400;
}

a:hover {
  text-decoration-color: white!important;
}

.catalog-card {
  display: inline-block;
  width: 30%;
}

</style>
