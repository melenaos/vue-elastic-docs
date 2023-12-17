<template>
  <template v-for="section in activePage.sections" v-key="section.title">
    <ElasticDocSection :section="section" />
  </template>
</template>

<script lang="ts">
import { BaseTransitionPropsValidators, computed, defineComponent } from 'vue';
import ElasticDocPageModel from '../models/ElasticDocPageModel'
import ElasticDocSection from './ElasticDocSection.vue'
import getHandle from '../utilities/getHandle';

export default defineComponent({
  props: {
    page: {
      type: Object as () => ElasticDocPageModel
    },
    pages: {
      type: Object as () => Array<ElasticDocPageModel>
    },
    active: String
  },
  setup(props) {
    const activePage = computed(() => {
      if (props.page) return props.page;
      if (props.pages && props.pages[0]) {
        for (var p of props.pages) {
          if (props.active == getHandle(p))
            return p;
        }
        return props.pages[0];
      }
      return {} as ElasticDocPageModel;
    })

    return { activePage }

  },
  components: {
    ElasticDocSection
  }
});
</script>