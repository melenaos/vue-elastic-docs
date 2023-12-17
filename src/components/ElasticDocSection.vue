<template>
  <component :is="header">{{ section.title }}</component>
  <ElasticDocContent v-if="Array.isArray(section.content)" v-for="content in section.content" :content="content" />
  <ElasticDocContent v-else :content="section.content" />

</template>

<script lang="ts">
import { computed, defineComponent } from 'vue';
import ElasticDocPageSectionModel from '../models/ElasticDocPageSectionModel'
import ElasticDocContent from './ElasticDocContent.vue'

export default defineComponent({
  props: {
    section: {
      type: Object as () => ElasticDocPageSectionModel,
      required: true,
    },
  },
  setup(props) {
    const header = computed(() => "h" + props.section.headerSize)

    return {header};
  },
  components:{
    ElasticDocContent
  }
});
</script>