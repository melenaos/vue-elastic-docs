<template>
    <p v-if="content.text">
        {{ content.text }}
    </p>
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
        content: undefined as ElasticDocContentModel | undefined
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
</script>