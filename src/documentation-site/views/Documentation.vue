<script setup>
import { ElasticDocPage, ElasticDocIndex } from '../../index'
import { useRoute } from "vue-router";
import Data from '../documentation'

const route =useRoute()

</script>

<template>
  <div class="sidebar">
    <ElasticDocIndex :data="Data" :active="route.params.id" />
  </div>

  <main>
    <ElasticDocPage :pages="Data.pages" :active="route.params.id" />
  </main>
</template>

<style>

body{
  display: initial;
  grid-template-columns: initial;
}
#app{
  display: grid;
  grid-template-columns: 204px 1fr min(45rem, calc(100% - 230px)) 1fr;
}

main{
  grid-column: 3;
}

.sidebar{
  padding:10px
}
</style>
../ElasticDocsData../documentation