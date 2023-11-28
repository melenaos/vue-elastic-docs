import ElasticDocPageModel from "./ElasticDocPageModel";

export default interface ElasticDocGroupModel{
    title: string;
    pages: Array<ElasticDocPageModel>;
}