<template>
  <template v-for="section in page.sections" v-key="section.title">
    <ElasticDocSection :section="section" />
  </template>

</template>

<script lang="ts">
import { defineComponent } from 'vue';
import ElasticDocPageModel from '../models/ElasticDocPageModel'
import ElasticDocSection from './ElasticDocSection.vue'

export default defineComponent({
  props: {
    page: undefined as ElasticDocPageModel | undefined
  },
  setup() { },
  components:{
    ElasticDocSection
  }
});
</script>