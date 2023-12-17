<template>
    <template v-for="page in pages">
        <router-link :to="getPath(data.baseUrl, page)" :class="cssClass(page)">{{ page.title }}</router-link>
    </template>
</template>
  
<script lang="ts">
import { computed, defineComponent } from 'vue';
import ElasticDocPageModel from '../models/ElasticDocPageModel'
import getPath from '../utilities/getPath'
import getHandle from '../utilities/getHandle'
import ElasticDocsModel from '../models/ElasticDocsModel'
import ElasticDocCssOptions from 'src/models/ElasticDocCssOptions';

export default defineComponent({
    props: {
        data: {
            type: Object as () => ElasticDocsModel,
            required: true,
        },
        pages: {
            type: Object as () => Array<ElasticDocPageModel>,
            required: true,
        },
        cssOptions: {
            type: Object as () => ElasticDocCssOptions,
            required: true,
        },
        active: String
    },
    setup(props) {
        const cssClass = (page: ElasticDocPageModel) =>
            `${props.cssOptions.indexLink} ${getHandle(page) == props.active ? props.cssOptions.indexLinkActive : ""}`

        return {
            cssClass,
            getPath,
            getHandle
        }
    },
});
</script>