<template>
    <ElasticDocIndexPages v-if="data.pages" :pages="data.pages" :data="data" :cssOptions="cssOptions" :active="active"/>
    <div v-if="data.groups" v-for="group in data.groups">
        <h2 class="group-title">{{ group.title }}</h2>
        <ElasticDocIndexPages :pages="group.pages" :data="data" :cssOptions="cssOptions" :active="active"/>
    </div>
</template>
  
<script lang="ts">
import { computed, defineComponent } from 'vue';
import ElasticDocsModel from '../models/ElasticDocsModel'
import ElasticDocIndexPages from './ElasticDocIndexPages.vue';
import getCssOptions from '../options/getCssOptions'

export default defineComponent({
    props: {
        data: {
            type: Object as () => ElasticDocsModel,
            required: true,
        },
        active: String
    },
    setup(props) {
       const cssOptions = computed(() => getCssOptions(props.data.cssOptions))
        return {
            cssOptions
        }
    },
    components: {
        ElasticDocIndexPages
    }
});
</script>