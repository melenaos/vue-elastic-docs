import ElasticDocPageSectionModel from "./ElasticDocPageSectionModel";

export default interface ElasticDocPageModel{
    handle:string;
    title: string;
    sections: Array<ElasticDocPageSectionModel>;
}