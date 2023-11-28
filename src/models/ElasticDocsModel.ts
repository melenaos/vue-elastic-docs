import ElasticDocGroupModel from "./ElasticDocGroupModel";
import ElasticDocPageModel from "./ElasticDocPageModel";

export default interface ElasticDocsModel {
    baseUrl:string;
    pages: Array<ElasticDocPageModel>;
    groups: Array<ElasticDocGroupModel>;
}