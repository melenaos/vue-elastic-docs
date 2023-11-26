import ElasticDocContentImageModel from "./ElasticDocContentImageModel";
import ElasticDocContentTextModel from "./ElasticDocContentTextModel";
import ElasticDocContentYouTubeVideoModel from "./ElasticDocContentVideoModel";
import ElasticDocContentMarkdownModel from './ElasticDocContentMarkdownModel';
import ElasticDocContentCodeModel from './ElasticDocContentCodeModel';

export type ElasticDocContentModel = 
                            ElasticDocContentTextModel | 
                            ElasticDocContentImageModel | 
                            ElasticDocContentYouTubeVideoModel | 
                            ElasticDocContentCodeModel |
                            ElasticDocContentMarkdownModel; 