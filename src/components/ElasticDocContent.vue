<template>
    <p v-if="content.text">
        {{ content.text }}
    </p>
    <RouterLink v-else-if="content.routerLinkTo" :to="content.routerLinkTo" :class="content.cssClass">{{ content.title }}</RouterLink>
    <a v-else-if="content.externalLink" :href="content.externalLink" target="_blank">{{ content.title }}</a>
    <VueMarkdown v-else-if="content.markdown" :source="content.markdown" :plugins="plugins" />
    <VueMarkdown v-else-if="content.code" :source="getCode(content)" :plugins="plugins" />
</template>
  
<script lang="ts">
import { computed, defineComponent } from 'vue';
import { ElasticDocContentModel } from '../models/content-type'
import VueMarkdown from 'vue-markdown-render'
import ElasticDocContentCodeModel from '../models/content-type/ElasticDocContentCodeModel';
import MarkdownItPrism from 'markdown-it-prism';


export default defineComponent({
    props: {
        content: {
            type: Object as () => ElasticDocContentModel,
            required: true,
        },
    },
    setup() {
        const plugins = [MarkdownItPrism];

        const getCode = (codeContent: ElasticDocContentCodeModel) => '```'+ codeContent.lang+ '\n' + codeContent.code+'```';
        return {
            getCode,
            plugins
        };
    },
    components: {
        VueMarkdown
    }

});
</script>../models/content-type/Code