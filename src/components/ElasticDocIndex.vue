<template>
    <ElasticDocIndexPages v-if="data.pages" :pages="data.pages" :data="data" />
    <div v-if="data.groups" v-for="group in data.groups">
        <h2 class="group-title">{{ group.title }}</h2>
        <ElasticDocIndexPages :pages="group.pages" :data="data" />
    </div>
</template>
  
<script lang="ts">
import { defineComponent } from 'vue';
import ElasticDocsModel from '../models/ElasticDocsModel'
import ElasticDocIndexPages from './ElasticDocIndexPages.vue';
import getHandle from '../utilities/getHandle'

export default defineComponent({
    props: {
        data: undefined as ElasticDocsModel | undefined
    },
    setup() {

        return {
            getHandle
        }
    },
    components: {
        ElasticDocIndexPages
    }
});
</script>