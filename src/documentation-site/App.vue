<script setup>
import { ElasticDocPage, ElasticDocIndex } from '../index'
import Data from './Data'
</script>

<template>
  <div class="sidebar">
    <ElasticDocIndex :data="Data" />
  </div>

  <main>
    <ElasticDocPage :page="Data.pages[0]" />
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
  grid-column: 2;
}
</style>
