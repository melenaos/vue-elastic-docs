import ElasticDocCssOptions from "./ElasticDocCssOptions";
import ElasticDocGroupModel from "./ElasticDocGroupModel";
import ElasticDocPageModel from "./ElasticDocPageModel";

export default interface ElasticDocsModel {
    baseUrl:string;
    cssOptions: ElasticDocCssOptions;
    pages: Array<ElasticDocPageModel>;
    groups: Array<ElasticDocGroupModel>;
}