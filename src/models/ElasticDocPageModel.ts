import ElasticDocPageSectionModel from "./ElasticDocPageSectionModel";

export default interface ElasticDocPageModel{
    title: string;
    sections: Array<ElasticDocPageSectionModel>;
}