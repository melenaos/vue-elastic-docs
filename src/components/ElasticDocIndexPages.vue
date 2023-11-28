<template>
    <div>
        <template v-for="page in pages">
            <a :href="getHandle(data.baseUrl, page)">{{ page.title }}</a>
        </template>
    </div>
</template>
  
<script lang="ts">
import { defineComponent } from 'vue';
import ElasticDocsPageModel from '../models/ElasticDocPageModel'
import getHandle from '../utilities/getHandle'
import ElasticDocsModel from '../models/ElasticDocsModel'

export default defineComponent({
    props: {
        data: undefined as ElasticDocsModel | undefined,
        pages: undefined as Array<ElasticDocsPageModel> | undefined
    },
    setup() {

        return {
            getHandle
        }
    },
});
</script>